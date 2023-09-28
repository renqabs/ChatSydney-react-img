var w = Object.defineProperty,
    l = (e, s, t) => (typeof s != "symbol" && (s += ""), s in e ? w(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[s] = t);
import v from "../../base64-js@v1.5.1/base64-js.js";
var T = Object.defineProperty,
    y = (e, s, t) => s in e ? T(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[s] = t,
    _ = (e, s, t) => (y(e, typeof s != "symbol" ? s + "" : s, t), t);

function j(e, s) {
    let t = Array.from({
        length: e.length
    }, (n, a) => ({
        start: a,
        end: a + 1
    }));
    for (; t.length > 1;) {
        let n = null;
        for (let a = 0; a < t.length - 1; a++) {
            const c = e.slice(t[a].start, t[a + 1].end),
                i = s.get(c.join(","));
            if (i == null) continue;
            (n == null || i < n[0]) && (n = [i, a])
        }
        if (n != null) {
            const a = n[1];
            t[a] = {
                start: t[a].start,
                end: t[a + 1].end
            }, t.splice(a + 1, 1)
        } else break
    }
    return t
}

function S(e, s) {
    return e.length === 1 ? [s.get(e.join(","))] : j(e, s).map(t => s.get(e.slice(t.start, t.end).join(","))).filter(t => t != null)
}

function M(e) {
    return e.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&")
}
var h = class {
        constructor(e, s) {
            l(this, "specialTokens");
            l(this, "inverseSpecialTokens");
            l(this, "patStr");
            l(this, "textEncoder", new TextEncoder);
            l(this, "textDecoder", new TextDecoder("utf-8"));
            l(this, "rankMap", new Map);
            l(this, "textMap", new Map);
            this.patStr = e.pat_str;
            const t = e.bpe_ranks.split(`
`).filter(Boolean).reduce((n, a) => {
                const [c, i, ...d] = a.split(" "), o = Number.parseInt(i, 10);
                return d.forEach((u, r) => n[u] = o + r), n
            }, {});
            for (const [n, a] of Object.entries(t)) {
                const c = v.toByteArray(n);
                this.rankMap.set(c.join(","), a), this.textMap.set(a, c)
            }
            this.specialTokens = { ...e.special_tokens,
                ...s
            }, this.inverseSpecialTokens = Object.entries(this.specialTokens).reduce((n, [a, c]) => (n[c] = this.textEncoder.encode(a), n), {})
        }
        encode(e, s = [], t = "all") {
            var u;
            const n = new RegExp(this.patStr, "ug"),
                a = h.specialTokenRegex(Object.keys(this.specialTokens)),
                c = [],
                i = new Set(s === "all" ? Object.keys(this.specialTokens) : s),
                d = new Set(t === "all" ? Object.keys(this.specialTokens).filter(r => !i.has(r)) : t);
            if (d.size > 0) {
                const r = h.specialTokenRegex([...d]),
                    p = e.match(r);
                if (p != null) throw new Error(`The text contains a special token that is not allowed: ${p[0]}`)
            }
            let o = 0;
            for (;;) {
                let r = null,
                    p = o;
                for (; !(a.lastIndex = p, r = a.exec(e), r == null || i.has(r[0]));) p = r.index + 1;
                const f = (u = r == null ? void 0 : r.index) != null ? u : e.length;
                for (const m of e.substring(o, f).matchAll(n)) {
                    const g = this.textEncoder.encode(m[0]),
                        b = this.rankMap.get(g.join(","));
                    if (b != null) {
                        c.push(b);
                        continue
                    }
                    c.push(...S(g, this.rankMap))
                }
                if (r == null) break;
                let k = this.specialTokens[r[0]];
                c.push(k), o = r.index + r[0].length
            }
            return c
        }
        decode(e) {
            var c;
            const s = [];
            let t = 0;
            for (let i = 0; i < e.length; ++i) {
                const d = e[i],
                    o = (c = this.textMap.get(d)) != null ? c : this.inverseSpecialTokens[d];
                o != null && (s.push(o), t += o.length)
            }
            const n = new Uint8Array(t);
            let a = 0;
            for (const i of s) n.set(i, a), a += i.length;
            return this.textDecoder.decode(n)
        }
    },
    x = h;
_(x, "specialTokenRegex", e => new RegExp(e.map(s => M(s)).join("|"), "g"));

function E(e) {
    switch (e) {
        case "gpt2":
            return "gpt2";
        case "code-cushman-001":
        case "code-cushman-002":
        case "code-davinci-001":
        case "code-davinci-002":
        case "cushman-codex":
        case "davinci-codex":
        case "text-davinci-002":
        case "text-davinci-003":
            return "p50k_base";
        case "code-davinci-edit-001":
        case "text-davinci-edit-001":
            return "p50k_edit";
        case "ada":
        case "babbage":
        case "code-search-ada-code-001":
        case "code-search-babbage-code-001":
        case "curie":
        case "davinci":
        case "text-ada-001":
        case "text-babbage-001":
        case "text-curie-001":
        case "text-davinci-001":
        case "text-search-ada-doc-001":
        case "text-search-babbage-doc-001":
        case "text-search-curie-doc-001":
        case "text-search-davinci-doc-001":
        case "text-similarity-ada-001":
        case "text-similarity-babbage-001":
        case "text-similarity-curie-001":
        case "text-similarity-davinci-001":
            return "r50k_base";
        case "gpt-3.5-turbo-16k-0613":
        case "gpt-3.5-turbo-16k":
        case "gpt-3.5-turbo-0613":
        case "gpt-3.5-turbo-0301":
        case "gpt-3.5-turbo":
        case "gpt-4-32k-0613":
        case "gpt-4-32k-0314":
        case "gpt-4-32k":
        case "gpt-4-0613":
        case "gpt-4-0314":
        case "gpt-4":
        case "text-embedding-ada-002":
            return "cl100k_base";
        default:
            throw new Error("Unknown model")
    }
}
export {
    x as T, E as g
};
export default null;