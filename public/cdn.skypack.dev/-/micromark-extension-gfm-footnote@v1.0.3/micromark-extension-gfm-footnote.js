import {
    blankLine as S
} from "../micromark-core-commonmark@v1.0.6/micromark-core-commonmark.js";
import {
    factorySpace as b
} from "../micromark-factory-space@v1.0.0/micromark-factory-space.js";
import {
    markdownLineEndingOrSpace as F,
    markdownLineEnding as D
} from "../micromark-util-character@v1.1.0/micromark-util-character.js";
import {
    normalizeIdentifier as d
} from "../micromark-util-normalize-identifier@v1.0.0/micromark-util-normalize-identifier.js";
import {
    sanitizeUri as C
} from "../micromark-util-sanitize-uri@v1.0.0/micromark-util-sanitize-uri.js";
const x = {
    tokenize: j,
    partial: !0
};

function L() {
    return {
        document: {
            [91]: {
                tokenize: M,
                continuation: {
                    tokenize: O
                },
                exit: E
            }
        },
        text: {
            [91]: {
                tokenize: I
            },
            [93]: {
                add: "after",
                tokenize: z,
                resolveTo: y
            }
        }
    }
}

function z(t, m, e) {
    const s = this;
    let i = s.events.length;
    const r = s.parser.gfmFootnotes || (s.parser.gfmFootnotes = []);
    let o;
    for (; i--;) {
        const l = s.events[i][1];
        if (l.type === "labelImage") {
            o = l;
            break
        }
        if (l.type === "gfmFootnoteCall" || l.type === "labelLink" || l.type === "label" || l.type === "image" || l.type === "link") break
    }
    return g;

    function g(l) {
        if (!o || !o._balanced) return e(l);
        const f = d(s.sliceSerialize({
            start: o.end,
            end: s.now()
        }));
        return f.charCodeAt(0) !== 94 || !r.includes(f.slice(1)) ? e(l) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(l), t.exit("gfmFootnoteCallLabelMarker"), m(l))
    }
}

function y(t, m) {
    let e = t.length;
    for (; e--;)
        if (t[e][1].type === "labelImage" && t[e][0] === "enter") {
            t[e][1];
            break
        }
    t[e + 1][1].type = "data", t[e + 3][1].type = "gfmFootnoteCallLabelMarker";
    const s = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, t[e + 3][1].start),
            end: Object.assign({}, t[t.length - 1][1].end)
        },
        i = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, t[e + 3][1].end),
            end: Object.assign({}, t[e + 3][1].end)
        };
    i.end.column++, i.end.offset++, i.end._bufferIndex++;
    const r = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, i.end),
            end: Object.assign({}, t[t.length - 1][1].start)
        },
        o = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, r.start),
            end: Object.assign({}, r.end)
        },
        g = [t[e + 1], t[e + 2],
            ["enter", s, m], t[e + 3], t[e + 4],
            ["enter", i, m],
            ["exit", i, m],
            ["enter", r, m],
            ["enter", o, m],
            ["exit", o, m],
            ["exit", r, m], t[t.length - 2], t[t.length - 1],
            ["exit", s, m]
        ];
    return t.splice(e, t.length - e + 1, ...g), t
}

function I(t, m, e) {
    const s = this,
        i = s.parser.gfmFootnotes || (s.parser.gfmFootnotes = []);
    let r = 0,
        o;
    return g;

    function g(a) {
        return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(a), t.exit("gfmFootnoteCallLabelMarker"), l
    }

    function l(a) {
        return a !== 94 ? e(a) : (t.enter("gfmFootnoteCallMarker"), t.consume(a), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", f)
    }

    function f(a) {
        let c;
        return a === null || a === 91 || r++ > 999 ? e(a) : a === 93 ? o ? (t.exit("chunkString"), c = t.exit("gfmFootnoteCallString"), i.includes(d(s.sliceSerialize(c))) ? h(a) : e(a)) : e(a) : (t.consume(a), F(a) || (o = !0), a === 92 ? u : f)
    }

    function u(a) {
        return a === 91 || a === 92 || a === 93 ? (t.consume(a), r++, f) : f(a)
    }

    function h(a) {
        return t.enter("gfmFootnoteCallLabelMarker"), t.consume(a), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), m
    }
}

function M(t, m, e) {
    const s = this,
        i = s.parser.gfmFootnotes || (s.parser.gfmFootnotes = []);
    let r, o = 0,
        g;
    return l;

    function l(n) {
        return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(n), t.exit("gfmFootnoteDefinitionLabelMarker"), f
    }

    function f(n) {
        return n === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(n), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), u) : e(n)
    }

    function u(n) {
        let p;
        return n === null || n === 91 || o > 999 ? e(n) : n === 93 ? g ? (p = t.exit("gfmFootnoteDefinitionLabelString"), r = d(s.sliceSerialize(p)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(n), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), c) : e(n) : D(n) ? (t.enter("lineEnding"), t.consume(n), t.exit("lineEnding"), o++, u) : (t.enter("chunkString").contentType = "string", h(n))
    }

    function h(n) {
        return n === null || D(n) || n === 91 || n === 93 || o > 999 ? (t.exit("chunkString"), u(n)) : (F(n) || (g = !0), o++, t.consume(n), n === 92 ? a : h)
    }

    function a(n) {
        return n === 91 || n === 92 || n === 93 ? (t.consume(n), o++, h) : h(n)
    }

    function c(n) {
        return n === 58 ? (t.enter("definitionMarker"), t.consume(n), t.exit("definitionMarker"), b(t, k, "gfmFootnoteDefinitionWhitespace")) : e(n)
    }

    function k(n) {
        return i.includes(r) || i.push(r), m(n)
    }
}

function O(t, m, e) {
    return t.check(S, m, t.attempt(x, m, e))
}

function E(t) {
    t.exit("gfmFootnoteDefinition")
}

function j(t, m, e) {
    const s = this;
    return b(t, i, "gfmFootnoteDefinitionIndent", 4 + 1);

    function i(r) {
        const o = s.events[s.events.length - 1];
        return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? m(r) : e(r)
    }
}
const w = {}.hasOwnProperty;

function N(t = {}) {
    const m = t.label || "Footnotes",
        e = t.backLabel || "Back to content",
        s = t.clobberPrefix === void 0 || t.clobberPrefix === null ? "user-content-" : t.clobberPrefix;
    return {
        enter: {
            gfmFootnoteDefinition() {
                const i = this.getData("tightStack");
                i.push(!1)
            },
            gfmFootnoteDefinitionLabelString() {
                this.buffer()
            },
            gfmFootnoteCallString() {
                this.buffer()
            }
        },
        exit: {
            gfmFootnoteDefinition() {
                let i = this.getData("gfmFootnoteDefinitions");
                const r = this.getData("gfmFootnoteDefinitionStack"),
                    o = this.getData("tightStack"),
                    g = r.pop(),
                    l = this.resume();
                i || this.setData("gfmFootnoteDefinitions", i = {}), w.call(i, g) || (i[g] = l), o.pop(), this.setData("slurpOneLineEnding", !0), this.setData("lastWasTag")
            },
            gfmFootnoteDefinitionLabelString(i) {
                let r = this.getData("gfmFootnoteDefinitionStack");
                r || this.setData("gfmFootnoteDefinitionStack", r = []), r.push(d(this.sliceSerialize(i))), this.resume(), this.buffer()
            },
            gfmFootnoteCallString(i) {
                let r = this.getData("gfmFootnoteCallOrder"),
                    o = this.getData("gfmFootnoteCallCounts");
                const g = d(this.sliceSerialize(i));
                let l;
                this.resume(), r || this.setData("gfmFootnoteCallOrder", r = []), o || this.setData("gfmFootnoteCallCounts", o = {});
                const f = r.indexOf(g),
                    u = C(g.toLowerCase());
                f === -1 ? (r.push(g), o[g] = 1, l = r.length) : (o[g]++, l = f + 1);
                const h = o[g];
                this.tag('<sup><a href="#' + s + "fn-" + u + '" id="' + s + "fnref-" + u + (h > 1 ? "-" + h : "") + '" data-footnote-ref="" aria-describedby="footnote-label">' + String(l) + "</a></sup>")
            },
            null() {
                const i = this.getData("gfmFootnoteCallOrder") || [],
                    r = this.getData("gfmFootnoteCallCounts") || {},
                    o = this.getData("gfmFootnoteDefinitions") || {};
                let g = -1;
                for (i.length > 0 && (this.lineEndingIfNeeded(), this.tag('<section data-footnotes="" class="footnotes"><h2 id="footnote-label" class="sr-only">'), this.raw(this.encode(m)), this.tag("</h2>"), this.lineEndingIfNeeded(), this.tag("<ol>")); ++g < i.length;) {
                    const l = i[g],
                        f = C(l.toLowerCase());
                    let u = 0;
                    const h = [];
                    for (; ++u <= r[l];) h.push('<a href="#' + s + "fnref-" + f + (u > 1 ? "-" + u : "") + '" data-footnote-backref="" class="data-footnote-backref" aria-label="' + this.encode(e) + '">\u21A9' + (u > 1 ? "<sup>" + u + "</sup>" : "") + "</a>");
                    const a = h.join(" ");
                    let c = !1;
                    this.lineEndingIfNeeded(), this.tag('<li id="' + s + "fn-" + f + '">'), this.lineEndingIfNeeded(), this.tag(o[l].replace(/<\/p>(?:\r?\n|\r)?$/, k => (c = !0, " " + a + k))), c || (this.lineEndingIfNeeded(), this.tag(a)), this.lineEndingIfNeeded(), this.tag("</li>")
                }
                i.length > 0 && (this.lineEndingIfNeeded(), this.tag("</ol>"), this.lineEndingIfNeeded(), this.tag("</section>"))
            }
        }
    }
}
export {
    L as gfmFootnote, N as gfmFootnoteHtml
};
export default null;