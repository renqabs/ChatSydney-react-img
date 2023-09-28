import {
    combineExtensions as an
} from "../../../micromark-util-combine-extensions@v1.0.0/micromark-util-combine-extensions.js";
import {
    factorySpace as V
} from "../../../micromark-factory-space@v1.0.0/micromark-factory-space.js";
import {
    markdownLineEnding as X
} from "../../../micromark-util-character@v1.1.0/micromark-util-character.js";
import {
    splice as H,
    push as fn
} from "../../../micromark-util-chunked@v1.0.0/micromark-util-chunked.js";
import {
    blankLine as dn,
    content as mn,
    list as g,
    blockQuote as hn,
    definition as pn,
    codeIndented as J,
    headingAtx as xn,
    thematicBreak as K,
    setextUnderline as Z,
    htmlFlow as kn,
    codeFenced as nn,
    characterReference as tn,
    characterEscape as en,
    lineEnding as U,
    labelStartImage as gn,
    attention as q,
    autolink as vn,
    htmlText as wn,
    labelStartLink as bn,
    hardBreakEscape as Cn,
    labelEnd as In,
    codeText as _n
} from "../../../micromark-core-commonmark@v1.0.6/micromark-core-commonmark.js";
import {
    resolveAll as Sn
} from "../../../micromark-util-resolve-all@v1.0.0/micromark-util-resolve-all.js";
const yn = {
    tokenize: zn
};

function zn(t) {
    const e = t.attempt(this.parser.constructs.contentInitial, n, i);
    let r;
    return e;

    function n(a) {
        if (a === null) {
            t.consume(a);
            return
        }
        return t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), V(t, e, "linePrefix")
    }

    function i(a) {
        return t.enter("paragraph"), o(a)
    }

    function o(a) {
        const p = t.enter("chunkText", {
            contentType: "text",
            previous: r
        });
        return r && (r.next = p), r = p, u(a)
    }

    function u(a) {
        if (a === null) {
            t.exit("chunkText"), t.exit("paragraph"), t.consume(a);
            return
        }
        return X(a) ? (t.consume(a), t.exit("chunkText"), o) : (t.consume(a), u)
    }
}
const jn = {
        tokenize: Fn
    },
    rn = {
        tokenize: An
    };

function Fn(t) {
    const e = this,
        r = [];
    let n = 0,
        i, o, u;
    return a;

    function a(s) {
        if (n < r.length) {
            const x = r[n];
            return e.containerState = x[1], t.attempt(x[0].continuation, p, l)(s)
        }
        return l(s)
    }

    function p(s) {
        if (n++, e.containerState._closeFlow) {
            e.containerState._closeFlow = void 0, i && A();
            const x = e.events.length;
            let k = x,
                m;
            for (; k--;)
                if (e.events[k][0] === "exit" && e.events[k][1].type === "chunkFlow") {
                    m = e.events[k][1].end;
                    break
                }
            I(n);
            let v = x;
            for (; v < e.events.length;) e.events[v][1].end = Object.assign({}, m), v++;
            return H(e.events, k + 1, 0, e.events.slice(x)), e.events.length = v, l(s)
        }
        return a(s)
    }

    function l(s) {
        if (n === r.length) {
            if (!i) return b(s);
            if (i.currentConstruct && i.currentConstruct.concrete) return C(s);
            e.interrupt = Boolean(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return e.containerState = {}, t.check(rn, d, y)(s)
    }

    function d(s) {
        return i && A(), I(n), b(s)
    }

    function y(s) {
        return e.parser.lazy[e.now().line] = n !== r.length, u = e.now().offset, C(s)
    }

    function b(s) {
        return e.containerState = {}, t.attempt(rn, z, C)(s)
    }

    function z(s) {
        return n++, r.push([e.currentConstruct, e.containerState]), b(s)
    }

    function C(s) {
        if (s === null) {
            i && A(), I(0), t.consume(s);
            return
        }
        return i = i || e.parser.flow(e.now()), t.enter("chunkFlow", {
            contentType: "flow",
            previous: o,
            _tokenizer: i
        }), O(s)
    }

    function O(s) {
        if (s === null) {
            E(t.exit("chunkFlow"), !0), I(0), t.consume(s);
            return
        }
        return X(s) ? (t.consume(s), E(t.exit("chunkFlow")), n = 0, e.interrupt = void 0, a) : (t.consume(s), O)
    }

    function E(s, x) {
        const k = e.sliceStream(s);
        if (x && k.push(null), s.previous = o, o && (o.next = s), o = s, i.defineSkip(s.start), i.write(k), e.parser.lazy[s.start.line]) {
            let m = i.events.length;
            for (; m--;)
                if (i.events[m][1].start.offset < u && (!i.events[m][1].end || i.events[m][1].end.offset > u)) return;
            const v = e.events.length;
            let _ = v,
                T, j;
            for (; _--;)
                if (e.events[_][0] === "exit" && e.events[_][1].type === "chunkFlow") {
                    if (T) {
                        j = e.events[_][1].end;
                        break
                    }
                    T = !0
                }
            for (I(n), m = v; m < e.events.length;) e.events[m][1].end = Object.assign({}, j), m++;
            H(e.events, _ + 1, 0, e.events.slice(v)), e.events.length = m
        }
    }

    function I(s) {
        let x = r.length;
        for (; x-- > s;) {
            const k = r[x];
            e.containerState = k[1], k[0].exit.call(e, t)
        }
        r.length = s
    }

    function A() {
        i.write([null]), o = void 0, i = void 0, e.containerState._closeFlow = void 0
    }
}

function An(t, e, r) {
    return V(t, t.attempt(this.parser.constructs.document, e, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}
const On = {
    tokenize: En
};

function En(t) {
    const e = this,
        r = t.attempt(dn, n, t.attempt(this.parser.constructs.flowInitial, i, V(t, t.attempt(this.parser.constructs.flow, i, t.attempt(mn, i)), "linePrefix")));
    return r;

    function n(o) {
        if (o === null) {
            t.consume(o);
            return
        }
        return t.enter("lineEndingBlank"), t.consume(o), t.exit("lineEndingBlank"), e.currentConstruct = void 0, r
    }

    function i(o) {
        if (o === null) {
            t.consume(o);
            return
        }
        return t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), e.currentConstruct = void 0, r
    }
}
const Tn = {
        resolveAll: ln()
    },
    Bn = on("string"),
    Ln = on("text");

function on(t) {
    return {
        tokenize: e,
        resolveAll: ln(t === "text" ? Pn : void 0)
    };

    function e(r) {
        const n = this,
            i = this.parser.constructs[t],
            o = r.attempt(i, u, a);
        return u;

        function u(d) {
            return l(d) ? o(d) : a(d)
        }

        function a(d) {
            if (d === null) {
                r.consume(d);
                return
            }
            return r.enter("data"), r.consume(d), p
        }

        function p(d) {
            return l(d) ? (r.exit("data"), o(d)) : (r.consume(d), p)
        }

        function l(d) {
            if (d === null) return !0;
            const y = i[d];
            let b = -1;
            if (y)
                for (; ++b < y.length;) {
                    const z = y[b];
                    if (!z.previous || z.previous.call(n, n.previous)) return !0
                }
            return !1
        }
    }
}

function ln(t) {
    return e;

    function e(r, n) {
        let i = -1,
            o;
        for (; ++i <= r.length;) o === void 0 ? r[i] && r[i][1].type === "data" && (o = i, i++) : (!r[i] || r[i][1].type !== "data") && (i !== o + 2 && (r[o][1].end = r[i - 1][1].end, r.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
        return t ? t(r, n) : r
    }
}

function Pn(t, e) {
    let r = 0;
    for (; ++r <= t.length;)
        if ((r === t.length || t[r][1].type === "lineEnding") && t[r - 1][1].type === "data") {
            const n = t[r - 1][1],
                i = e.sliceStream(n);
            let o = i.length,
                u = -1,
                a = 0,
                p;
            for (; o--;) {
                const l = i[o];
                if (typeof l == "string") {
                    for (u = l.length; l.charCodeAt(u - 1) === 32;) a++, u--;
                    if (u) break;
                    u = -1
                } else if (l === -2) p = !0, a++;
                else if (!(l === -1)) {
                    o++;
                    break
                }
            }
            if (a) {
                const l = {
                    type: r === t.length || p || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: n.end.line,
                        column: n.end.column - a,
                        offset: n.end.offset - a,
                        _index: n.start._index + o,
                        _bufferIndex: o ? u : n.start._bufferIndex + u
                    },
                    end: Object.assign({}, n.end)
                };
                n.end = Object.assign({}, l.start), n.start.offset === n.end.offset ? Object.assign(n, l) : (t.splice(r, 0, ["enter", l, e], ["exit", l, e]), r += 2)
            }
            r++
        }
    return t
}

function Dn(t, e, r) {
    let n = Object.assign(r ? Object.assign({}, r) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    const i = {},
        o = [];
    let u = [],
        a = [];
    const p = {
            consume: A,
            enter: s,
            exit: x,
            attempt: v(k),
            check: v(m),
            interrupt: v(m, {
                interrupt: !0
            })
        },
        l = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: t,
            sliceStream: z,
            sliceSerialize: b,
            now: C,
            defineSkip: O,
            write: y
        };
    let d = e.tokenize.call(l, p);
    return e.resolveAll && o.push(e), l;

    function y(c) {
        return u = fn(u, c), E(), u[u.length - 1] !== null ? [] : (_(e, 0), l.events = Sn(o, l.events, l), l.events)
    }

    function b(c, f) {
        return $n(z(c), f)
    }

    function z(c) {
        return Qn(u, c)
    }

    function C() {
        return Object.assign({}, n)
    }

    function O(c) {
        i[c.line] = c.column, j()
    }

    function E() {
        let c;
        for (; n._index < u.length;) {
            const f = u[n._index];
            if (typeof f == "string")
                for (c = n._index, n._bufferIndex < 0 && (n._bufferIndex = 0); n._index === c && n._bufferIndex < f.length;) I(f.charCodeAt(n._bufferIndex));
            else I(f)
        }
    }

    function I(c) {
        d = d(c)
    }

    function A(c) {
        X(c) ? (n.line++, n.column = 1, n.offset += c === -3 ? 2 : 1, j()) : c !== -1 && (n.column++, n.offset++), n._bufferIndex < 0 ? n._index++ : (n._bufferIndex++, n._bufferIndex === u[n._index].length && (n._bufferIndex = -1, n._index++)), l.previous = c
    }

    function s(c, f) {
        const w = f || {};
        return w.type = c, w.start = C(), l.events.push(["enter", w, l]), a.push(w), w
    }

    function x(c) {
        const f = a.pop();
        return f.end = C(), l.events.push(["exit", f, l]), f
    }

    function k(c, f) {
        _(c, f.from)
    }

    function m(c, f) {
        f.restore()
    }

    function v(c, f) {
        return w;

        function w(S, Q, B) {
            let $, L, W, M;
            return Array.isArray(S) ? N(S) : "tokenize" in S ? N([S]) : un(S);

            function un(h) {
                return R;

                function R(F) {
                    const P = F !== null && h[F],
                        D = F !== null && h.null,
                        cn = [...Array.isArray(P) ? P : P ? [P] : [], ...Array.isArray(D) ? D : D ? [D] : []];
                    return N(cn)(F)
                }
            }

            function N(h) {
                return $ = h, L = 0, h.length === 0 ? B : G(h[L])
            }

            function G(h) {
                return R;

                function R(F) {
                    return M = T(), W = h, h.partial || (l.currentConstruct = h), h.name && l.parser.constructs.disable.null.includes(h.name) ? Y() : h.tokenize.call(f ? Object.assign(Object.create(l), f) : l, p, sn, Y)(F)
                }
            }

            function sn(h) {
                return c(W, M), Q
            }

            function Y(h) {
                return M.restore(), ++L < $.length ? G($[L]) : B
            }
        }
    }

    function _(c, f) {
        c.resolveAll && !o.includes(c) && o.push(c), c.resolve && H(l.events, f, l.events.length - f, c.resolve(l.events.slice(f), l)), c.resolveTo && (l.events = c.resolveTo(l.events, l))
    }

    function T() {
        const c = C(),
            f = l.previous,
            w = l.currentConstruct,
            S = l.events.length,
            Q = Array.from(a);
        return {
            restore: B,
            from: S
        };

        function B() {
            n = c, l.previous = f, l.currentConstruct = w, l.events.length = S, a = Q, j()
        }
    }

    function j() {
        n.line in i && n.column < 2 && (n.column = i[n.line], n.offset += i[n.line] - 1)
    }
}

function Qn(t, e) {
    const r = e.start._index,
        n = e.start._bufferIndex,
        i = e.end._index,
        o = e.end._bufferIndex;
    let u;
    return r === i ? u = [t[r].slice(n, o)] : (u = t.slice(r, i), n > -1 && (u[0] = u[0].slice(n)), o > 0 && u.push(t[i].slice(0, o))), u
}

function $n(t, e) {
    let r = -1;
    const n = [];
    let i;
    for (; ++r < t.length;) {
        const o = t[r];
        let u;
        if (typeof o == "string") u = o;
        else switch (o) {
            case -5:
                {
                    u = "\r";
                    break
                }
            case -4:
                {
                    u = `
`;
                    break
                }
            case -3:
                {
                    u = `\r
`;
                    break
                }
            case -2:
                {
                    u = e ? " " : "	";
                    break
                }
            case -1:
                {
                    if (!e && i) continue;u = " ";
                    break
                }
            default:
                u = String.fromCharCode(o)
        }
        i = o === -2, n.push(u)
    }
    return n.join("")
}
const Mn = {
        [42]: g,
        [43]: g,
        [45]: g,
        [48]: g,
        [49]: g,
        [50]: g,
        [51]: g,
        [52]: g,
        [53]: g,
        [54]: g,
        [55]: g,
        [56]: g,
        [57]: g,
        [62]: hn
    },
    Nn = {
        [91]: pn
    },
    Rn = {
        [-2]: J,
        [-1]: J,
        [32]: J
    },
    Vn = {
        [35]: xn,
        [42]: K,
        [45]: [Z, K],
        [60]: kn,
        [61]: Z,
        [95]: K,
        [96]: nn,
        [126]: nn
    },
    Xn = {
        [38]: tn,
        [92]: en
    },
    Hn = {
        [-5]: U,
        [-4]: U,
        [-3]: U,
        [33]: gn,
        [38]: tn,
        [42]: q,
        [60]: [vn, wn],
        [91]: bn,
        [92]: [Cn, en],
        [93]: In,
        [95]: q,
        [96]: _n
    },
    Jn = {
        null: [q, Tn]
    },
    Kn = {
        null: [42, 95]
    },
    Un = {
        null: []
    };
var qn = Object.freeze({
    __proto__: null,
    document: Mn,
    contentInitial: Nn,
    flowInitial: Rn,
    flow: Vn,
    string: Xn,
    text: Hn,
    insideSpan: Jn,
    attentionMarkers: Kn,
    disable: Un
});

function Wn(t = {}) {
    const e = an([qn].concat(t.extensions || [])),
        r = {
            defined: [],
            lazy: {},
            constructs: e,
            content: n(yn),
            document: n(jn),
            flow: n(On),
            string: n(Bn),
            text: n(Ln)
        };
    return r;

    function n(i) {
        return o;

        function o(u) {
            return Dn(r, i, u)
        }
    }
}
export {
    Wn as parse
};
export default null;