import {
    push as F,
    splice as Y
} from "../micromark-util-chunked@v1.0.0/micromark-util-chunked.js";
import {
    classifyCharacter as d
} from "../micromark-util-classify-character@v1.0.0/micromark-util-classify-character.js";
import {
    resolveAll as nn
} from "../micromark-util-resolve-all@v1.0.0/micromark-util-resolve-all.js";
import {
    asciiAlpha as O,
    asciiAtext as tn,
    asciiAlphanumeric as M,
    asciiControl as gn,
    markdownLineEnding as z,
    markdownSpace as C,
    asciiPunctuation as cn,
    asciiHexDigit as zn,
    asciiDigit as K,
    markdownLineEndingOrSpace as P
} from "../micromark-util-character@v1.1.0/micromark-util-character.js";
import {
    factorySpace as y
} from "../micromark-factory-space@v1.0.0/micromark-factory-space.js";
import {
    decodeNamedCharacterReference as Sn
} from "../decode-named-character-reference@v1.0.1-B/decode-named-character-reference.js";
import {
    subtokenize as bn
} from "../micromark-util-subtokenize@v1.0.2/micromark-util-subtokenize.js";
import {
    factoryDestination as rn
} from "../micromark-factory-destination@v1.0.0/micromark-factory-destination.js";
import {
    factoryLabel as en
} from "../micromark-factory-label@v1.0.2/micromark-factory-label.js";
import {
    factoryTitle as un
} from "../micromark-factory-title@v1.0.2/micromark-factory-title.js";
import {
    factoryWhitespace as J
} from "../micromark-factory-whitespace@v1.0.0/micromark-factory-whitespace.js";
import {
    normalizeIdentifier as $
} from "../micromark-util-normalize-identifier@v1.0.0/micromark-util-normalize-identifier.js";
import {
    htmlRawNames as an,
    htmlBlockNames as yn
} from "../micromark-util-html-tag-name@v1.0.0/micromark-util-html-tag-name.js";
const En = {
    name: "attention",
    tokenize: wn,
    resolveAll: Cn
};

function Cn(n, u) {
    let r = -1,
        t, l, m, a, o, s, h, p;
    for (; ++r < n.length;)
        if (n[r][0] === "enter" && n[r][1].type === "attentionSequence" && n[r][1]._close) {
            for (t = r; t--;)
                if (n[t][0] === "exit" && n[t][1].type === "attentionSequence" && n[t][1]._open && u.sliceSerialize(n[t][1]).charCodeAt(0) === u.sliceSerialize(n[r][1]).charCodeAt(0)) {
                    if ((n[t][1]._close || n[r][1]._open) && (n[r][1].end.offset - n[r][1].start.offset) % 3 && !((n[t][1].end.offset - n[t][1].start.offset + n[r][1].end.offset - n[r][1].start.offset) % 3)) continue;
                    s = n[t][1].end.offset - n[t][1].start.offset > 1 && n[r][1].end.offset - n[r][1].start.offset > 1 ? 2 : 1;
                    const g = Object.assign({}, n[t][1].end),
                        b = Object.assign({}, n[r][1].start);
                    ln(g, -s), ln(b, s), a = {
                        type: s > 1 ? "strongSequence" : "emphasisSequence",
                        start: g,
                        end: Object.assign({}, n[t][1].end)
                    }, o = {
                        type: s > 1 ? "strongSequence" : "emphasisSequence",
                        start: Object.assign({}, n[r][1].start),
                        end: b
                    }, m = {
                        type: s > 1 ? "strongText" : "emphasisText",
                        start: Object.assign({}, n[t][1].end),
                        end: Object.assign({}, n[r][1].start)
                    }, l = {
                        type: s > 1 ? "strong" : "emphasis",
                        start: Object.assign({}, a.start),
                        end: Object.assign({}, o.end)
                    }, n[t][1].end = Object.assign({}, a.start), n[r][1].start = Object.assign({}, o.end), h = [], n[t][1].end.offset - n[t][1].start.offset && (h = F(h, [
                        ["enter", n[t][1], u],
                        ["exit", n[t][1], u]
                    ])), h = F(h, [
                        ["enter", l, u],
                        ["enter", a, u],
                        ["exit", a, u],
                        ["enter", m, u]
                    ]), h = F(h, nn(u.parser.constructs.insideSpan.null, n.slice(t + 1, r), u)), h = F(h, [
                        ["exit", m, u],
                        ["enter", o, u],
                        ["exit", o, u],
                        ["exit", l, u]
                    ]), n[r][1].end.offset - n[r][1].start.offset ? (p = 2, h = F(h, [
                        ["enter", n[r][1], u],
                        ["exit", n[r][1], u]
                    ])) : p = 0, Y(n, t - 1, r - t + 3, h), r = t + h.length - p - 2;
                    break
                }
        }
    for (r = -1; ++r < n.length;) n[r][1].type === "attentionSequence" && (n[r][1].type = "data");
    return n
}

function wn(n, u) {
    const r = this.parser.constructs.attentionMarkers.null,
        t = this.previous,
        l = d(t);
    let m;
    return a;

    function a(s) {
        return n.enter("attentionSequence"), m = s, o(s)
    }

    function o(s) {
        if (s === m) return n.consume(s), o;
        const h = n.exit("attentionSequence"),
            p = d(s),
            g = !p || p === 2 && l || r.includes(s),
            b = !l || l === 2 && p || r.includes(t);
        return h._open = Boolean(m === 42 ? g : g && (l || !b)), h._close = Boolean(m === 42 ? b : b && (p || !g)), u(s)
    }
}

function ln(n, u) {
    n.column += u, n.offset += u, n._bufferIndex += u
}
const Ln = {
    name: "autolink",
    tokenize: Tn
};

function Tn(n, u, r) {
    let t = 1;
    return l;

    function l(x) {
        return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), m
    }

    function m(x) {
        return O(x) ? (n.consume(x), a) : tn(x) ? h(x) : r(x)
    }

    function a(x) {
        return x === 43 || x === 45 || x === 46 || M(x) ? o(x) : h(x)
    }

    function o(x) {
        return x === 58 ? (n.consume(x), s) : (x === 43 || x === 45 || x === 46 || M(x)) && t++ < 32 ? (n.consume(x), o) : h(x)
    }

    function s(x) {
        return x === 62 ? (n.exit("autolinkProtocol"), c(x)) : x === null || x === 32 || x === 60 || gn(x) ? r(x) : (n.consume(x), s)
    }

    function h(x) {
        return x === 64 ? (n.consume(x), t = 0, p) : tn(x) ? (n.consume(x), h) : r(x)
    }

    function p(x) {
        return M(x) ? g(x) : r(x)
    }

    function g(x) {
        return x === 46 ? (n.consume(x), t = 0, p) : x === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", c(x)) : b(x)
    }

    function b(x) {
        return (x === 45 || M(x)) && t++ < 63 ? (n.consume(x), x === 45 ? b : g) : r(x)
    }

    function c(x) {
        return n.enter("autolinkMarker"), n.consume(x), n.exit("autolinkMarker"), n.exit("autolink"), u
    }
}
const Z = {
    tokenize: In,
    partial: !0
};

function In(n, u, r) {
    return y(n, t, "linePrefix");

    function t(l) {
        return l === null || z(l) ? u(l) : r(l)
    }
}
const on = {
    name: "blockQuote",
    tokenize: An,
    continuation: {
        tokenize: Fn
    },
    exit: Mn
};

function An(n, u, r) {
    const t = this;
    return l;

    function l(a) {
        if (a === 62) {
            const o = t.containerState;
            return o.open || (n.enter("blockQuote", {
                _container: !0
            }), o.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(a), n.exit("blockQuoteMarker"), m
        }
        return r(a)
    }

    function m(a) {
        return C(a) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(a), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), u) : (n.exit("blockQuotePrefix"), u(a))
    }
}

function Fn(n, u, r) {
    return y(n, n.attempt(on, u, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function Mn(n) {
    n.exit("blockQuote")
}
const On = {
    name: "characterEscape",
    tokenize: Pn
};

function Pn(n, u, r) {
    return t;

    function t(m) {
        return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(m), n.exit("escapeMarker"), l
    }

    function l(m) {
        return cn(m) ? (n.enter("characterEscapeValue"), n.consume(m), n.exit("characterEscapeValue"), n.exit("characterEscape"), u) : r(m)
    }
}
const Bn = {
    name: "characterReference",
    tokenize: fn
};

function fn(n, u, r) {
    const t = this;
    let l = 0,
        m, a;
    return o;

    function o(g) {
        return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(g), n.exit("characterReferenceMarker"), s
    }

    function s(g) {
        return g === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(g), n.exit("characterReferenceMarkerNumeric"), h) : (n.enter("characterReferenceValue"), m = 31, a = M, p(g))
    }

    function h(g) {
        return g === 88 || g === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(g), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), m = 6, a = zn, p) : (n.enter("characterReferenceValue"), m = 7, a = K, p(g))
    }

    function p(g) {
        let b;
        return g === 59 && l ? (b = n.exit("characterReferenceValue"), a === M && !Sn(t.sliceSerialize(b)) ? r(g) : (n.enter("characterReferenceMarker"), n.consume(g), n.exit("characterReferenceMarker"), n.exit("characterReference"), u)) : a(g) && l++ < m ? (n.consume(g), p) : r(g)
    }
}
const qn = {
    name: "codeFenced",
    tokenize: Dn,
    concrete: !0
};

function Dn(n, u, r) {
    const t = this,
        l = {
            tokenize: D,
            partial: !0
        },
        m = {
            tokenize: q,
            partial: !0
        },
        a = this.events[this.events.length - 1],
        o = a && a[1].type === "linePrefix" ? a[2].sliceSerialize(a[1], !0).length : 0;
    let s = 0,
        h;
    return p;

    function p(k) {
        return n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), h = k, g(k)
    }

    function g(k) {
        return k === h ? (n.consume(k), s++, g) : (n.exit("codeFencedFenceSequence"), s < 3 ? r(k) : y(n, b, "whitespace")(k))
    }

    function b(k) {
        return k === null || z(k) ? Q(k) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
            contentType: "string"
        }), c(k))
    }

    function c(k) {
        return k === null || P(k) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), y(n, x, "whitespace")(k)) : k === 96 && k === h ? r(k) : (n.consume(k), c)
    }

    function x(k) {
        return k === null || z(k) ? Q(k) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
            contentType: "string"
        }), H(k))
    }

    function H(k) {
        return k === null || z(k) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), Q(k)) : k === 96 && k === h ? r(k) : (n.consume(k), H)
    }

    function Q(k) {
        return n.exit("codeFencedFence"), t.interrupt ? u(k) : w(k)
    }

    function w(k) {
        return k === null ? f(k) : z(k) ? n.attempt(m, n.attempt(l, f, o ? y(n, w, "linePrefix", o + 1) : w), f)(k) : (n.enter("codeFlowValue"), B(k))
    }

    function B(k) {
        return k === null || z(k) ? (n.exit("codeFlowValue"), w(k)) : (n.consume(k), B)
    }

    function f(k) {
        return n.exit("codeFenced"), u(k)
    }

    function q(k, _, R) {
        const L = this;
        return j;

        function j(I) {
            return k.enter("lineEnding"), k.consume(I), k.exit("lineEnding"), S
        }

        function S(I) {
            return L.parser.lazy[L.now().line] ? R(I) : _(I)
        }
    }

    function D(k, _, R) {
        let L = 0;
        return y(k, j, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

        function j(E) {
            return k.enter("codeFencedFence"), k.enter("codeFencedFenceSequence"), S(E)
        }

        function S(E) {
            return E === h ? (k.consume(E), L++, S) : L < s ? R(E) : (k.exit("codeFencedFenceSequence"), y(k, I, "whitespace")(E))
        }

        function I(E) {
            return E === null || z(E) ? (k.exit("codeFencedFence"), _(E)) : R(E)
        }
    }
}
const Rn = {
        name: "codeIndented",
        tokenize: Vn
    },
    jn = {
        tokenize: Hn,
        partial: !0
    };

function Vn(n, u, r) {
    const t = this;
    return l;

    function l(h) {
        return n.enter("codeIndented"), y(n, m, "linePrefix", 4 + 1)(h)
    }

    function m(h) {
        const p = t.events[t.events.length - 1];
        return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? a(h) : r(h)
    }

    function a(h) {
        return h === null ? s(h) : z(h) ? n.attempt(jn, a, s)(h) : (n.enter("codeFlowValue"), o(h))
    }

    function o(h) {
        return h === null || z(h) ? (n.exit("codeFlowValue"), a(h)) : (n.consume(h), o)
    }

    function s(h) {
        return n.exit("codeIndented"), u(h)
    }
}

function Hn(n, u, r) {
    const t = this;
    return l;

    function l(a) {
        return t.parser.lazy[t.now().line] ? r(a) : z(a) ? (n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), l) : y(n, m, "linePrefix", 4 + 1)(a)
    }

    function m(a) {
        const o = t.events[t.events.length - 1];
        return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? u(a) : z(a) ? l(a) : r(a)
    }
}
const Qn = {
    name: "codeText",
    tokenize: Wn,
    resolve: _n,
    previous: Nn
};

function _n(n) {
    let u = n.length - 4,
        r = 3,
        t, l;
    if ((n[r][1].type === "lineEnding" || n[r][1].type === "space") && (n[u][1].type === "lineEnding" || n[u][1].type === "space")) {
        for (t = r; ++t < u;)
            if (n[t][1].type === "codeTextData") {
                n[r][1].type = "codeTextPadding", n[u][1].type = "codeTextPadding", r += 2, u -= 2;
                break
            }
    }
    for (t = r - 1, u++; ++t <= u;) l === void 0 ? t !== u && n[t][1].type !== "lineEnding" && (l = t) : (t === u || n[t][1].type === "lineEnding") && (n[l][1].type = "codeTextData", t !== l + 2 && (n[l][1].end = n[t - 1][1].end, n.splice(l + 2, t - l - 2), u -= t - l - 2, t = l + 2), l = void 0);
    return n
}

function Nn(n) {
    return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function Wn(n, u, r) {
    let t = 0,
        l, m;
    return a;

    function a(g) {
        return n.enter("codeText"), n.enter("codeTextSequence"), o(g)
    }

    function o(g) {
        return g === 96 ? (n.consume(g), t++, o) : (n.exit("codeTextSequence"), s(g))
    }

    function s(g) {
        return g === null ? r(g) : g === 96 ? (m = n.enter("codeTextSequence"), l = 0, p(g)) : g === 32 ? (n.enter("space"), n.consume(g), n.exit("space"), s) : z(g) ? (n.enter("lineEnding"), n.consume(g), n.exit("lineEnding"), s) : (n.enter("codeTextData"), h(g))
    }

    function h(g) {
        return g === null || g === 32 || g === 96 || z(g) ? (n.exit("codeTextData"), s(g)) : (n.consume(g), h)
    }

    function p(g) {
        return g === 96 ? (n.consume(g), l++, p) : l === t ? (n.exit("codeTextSequence"), n.exit("codeText"), u(g)) : (m.type = "codeTextData", h(g))
    }
}
const Un = {
        tokenize: Zn,
        resolve: Xn
    },
    Jn = {
        tokenize: Gn,
        partial: !0
    };

function Xn(n) {
    return bn(n), n
}

function Zn(n, u) {
    let r;
    return t;

    function t(o) {
        return n.enter("content"), r = n.enter("chunkContent", {
            contentType: "content"
        }), l(o)
    }

    function l(o) {
        return o === null ? m(o) : z(o) ? n.check(Jn, a, m)(o) : (n.consume(o), l)
    }

    function m(o) {
        return n.exit("chunkContent"), n.exit("content"), u(o)
    }

    function a(o) {
        return n.consume(o), n.exit("chunkContent"), r.next = n.enter("chunkContent", {
            contentType: "content",
            previous: r
        }), r = r.next, l
    }
}

function Gn(n, u, r) {
    const t = this;
    return l;

    function l(a) {
        return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), y(n, m, "linePrefix")
    }

    function m(a) {
        if (a === null || z(a)) return r(a);
        const o = t.events[t.events.length - 1];
        return !t.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? u(a) : n.interrupt(t.parser.constructs.flow, r, u)(a)
    }
}
const Yn = {
        name: "definition",
        tokenize: $n
    },
    Kn = {
        tokenize: vn,
        partial: !0
    };

function $n(n, u, r) {
    const t = this;
    let l;
    return m;

    function m(s) {
        return n.enter("definition"), en.call(t, n, a, r, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(s)
    }

    function a(s) {
        return l = $(t.sliceSerialize(t.events[t.events.length - 1][1]).slice(1, -1)), s === 58 ? (n.enter("definitionMarker"), n.consume(s), n.exit("definitionMarker"), J(n, rn(n, n.attempt(Kn, y(n, o, "whitespace"), y(n, o, "whitespace")), r, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : r(s)
    }

    function o(s) {
        return s === null || z(s) ? (n.exit("definition"), t.parser.defined.includes(l) || t.parser.defined.push(l), u(s)) : r(s)
    }
}

function vn(n, u, r) {
    return t;

    function t(a) {
        return P(a) ? J(n, l)(a) : r(a)
    }

    function l(a) {
        return a === 34 || a === 39 || a === 40 ? un(n, y(n, m, "whitespace"), r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a) : r(a)
    }

    function m(a) {
        return a === null || z(a) ? u(a) : r(a)
    }
}
const dn = {
    name: "hardBreakEscape",
    tokenize: nt
};

function nt(n, u, r) {
    return t;

    function t(m) {
        return n.enter("hardBreakEscape"), n.enter("escapeMarker"), n.consume(m), l
    }

    function l(m) {
        return z(m) ? (n.exit("escapeMarker"), n.exit("hardBreakEscape"), u(m)) : r(m)
    }
}
const tt = {
    name: "headingAtx",
    tokenize: et,
    resolve: rt
};

function rt(n, u) {
    let r = n.length - 2,
        t = 3,
        l, m;
    return n[t][1].type === "whitespace" && (t += 2), r - 2 > t && n[r][1].type === "whitespace" && (r -= 2), n[r][1].type === "atxHeadingSequence" && (t === r - 1 || r - 4 > t && n[r - 2][1].type === "whitespace") && (r -= t + 1 === r ? 2 : 4), r > t && (l = {
        type: "atxHeadingText",
        start: n[t][1].start,
        end: n[r][1].end
    }, m = {
        type: "chunkText",
        start: n[t][1].start,
        end: n[r][1].end,
        contentType: "text"
    }, Y(n, t, r - t + 1, [
        ["enter", l, u],
        ["enter", m, u],
        ["exit", m, u],
        ["exit", l, u]
    ])), n
}

function et(n, u, r) {
    const t = this;
    let l = 0;
    return m;

    function m(p) {
        return n.enter("atxHeading"), n.enter("atxHeadingSequence"), a(p)
    }

    function a(p) {
        return p === 35 && l++ < 6 ? (n.consume(p), a) : p === null || P(p) ? (n.exit("atxHeadingSequence"), t.interrupt ? u(p) : o(p)) : r(p)
    }

    function o(p) {
        return p === 35 ? (n.enter("atxHeadingSequence"), s(p)) : p === null || z(p) ? (n.exit("atxHeading"), u(p)) : C(p) ? y(n, o, "whitespace")(p) : (n.enter("atxHeadingText"), h(p))
    }

    function s(p) {
        return p === 35 ? (n.consume(p), s) : (n.exit("atxHeadingSequence"), o(p))
    }

    function h(p) {
        return p === null || p === 35 || P(p) ? (n.exit("atxHeadingText"), o(p)) : (n.consume(p), h)
    }
}
const it = {
        name: "htmlFlow",
        tokenize: lt,
        resolveTo: at,
        concrete: !0
    },
    ut = {
        tokenize: ot,
        partial: !0
    };

function at(n) {
    let u = n.length;
    for (; u-- && !(n[u][0] === "enter" && n[u][1].type === "htmlFlow"););
    return u > 1 && n[u - 2][1].type === "linePrefix" && (n[u][1].start = n[u - 2][1].start, n[u + 1][1].start = n[u - 2][1].start, n.splice(u - 2, 2)), n
}

function lt(n, u, r) {
    const t = this;
    let l, m, a, o, s;
    return h;

    function h(e) {
        return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(e), p
    }

    function p(e) {
        return e === 33 ? (n.consume(e), g) : e === 47 ? (n.consume(e), x) : e === 63 ? (n.consume(e), l = 3, t.interrupt ? u : V) : O(e) ? (n.consume(e), a = String.fromCharCode(e), m = !0, H) : r(e)
    }

    function g(e) {
        return e === 45 ? (n.consume(e), l = 2, b) : e === 91 ? (n.consume(e), l = 5, a = "CDATA[", o = 0, c) : O(e) ? (n.consume(e), l = 4, t.interrupt ? u : V) : r(e)
    }

    function b(e) {
        return e === 45 ? (n.consume(e), t.interrupt ? u : V) : r(e)
    }

    function c(e) {
        return e === a.charCodeAt(o++) ? (n.consume(e), o === a.length ? t.interrupt ? u : S : c) : r(e)
    }

    function x(e) {
        return O(e) ? (n.consume(e), a = String.fromCharCode(e), H) : r(e)
    }

    function H(e) {
        return e === null || e === 47 || e === 62 || P(e) ? e !== 47 && m && an.includes(a.toLowerCase()) ? (l = 1, t.interrupt ? u(e) : S(e)) : yn.includes(a.toLowerCase()) ? (l = 6, e === 47 ? (n.consume(e), Q) : t.interrupt ? u(e) : S(e)) : (l = 7, t.interrupt && !t.parser.lazy[t.now().line] ? r(e) : m ? B(e) : w(e)) : e === 45 || M(e) ? (n.consume(e), a += String.fromCharCode(e), H) : r(e)
    }

    function Q(e) {
        return e === 62 ? (n.consume(e), t.interrupt ? u : S) : r(e)
    }

    function w(e) {
        return C(e) ? (n.consume(e), w) : L(e)
    }

    function B(e) {
        return e === 47 ? (n.consume(e), L) : e === 58 || e === 95 || O(e) ? (n.consume(e), f) : C(e) ? (n.consume(e), B) : L(e)
    }

    function f(e) {
        return e === 45 || e === 46 || e === 58 || e === 95 || M(e) ? (n.consume(e), f) : q(e)
    }

    function q(e) {
        return e === 61 ? (n.consume(e), D) : C(e) ? (n.consume(e), q) : B(e)
    }

    function D(e) {
        return e === null || e === 60 || e === 61 || e === 62 || e === 96 ? r(e) : e === 34 || e === 39 ? (n.consume(e), s = e, k) : C(e) ? (n.consume(e), D) : (s = null, _(e))
    }

    function k(e) {
        return e === null || z(e) ? r(e) : e === s ? (n.consume(e), R) : (n.consume(e), k)
    }

    function _(e) {
        return e === null || e === 34 || e === 39 || e === 60 || e === 61 || e === 62 || e === 96 || P(e) ? q(e) : (n.consume(e), _)
    }

    function R(e) {
        return e === 47 || e === 62 || C(e) ? B(e) : r(e)
    }

    function L(e) {
        return e === 62 ? (n.consume(e), j) : r(e)
    }

    function j(e) {
        return C(e) ? (n.consume(e), j) : e === null || z(e) ? S(e) : r(e)
    }

    function S(e) {
        return e === 45 && l === 2 ? (n.consume(e), W) : e === 60 && l === 1 ? (n.consume(e), G) : e === 62 && l === 4 ? (n.consume(e), T) : e === 63 && l === 3 ? (n.consume(e), V) : e === 93 && l === 5 ? (n.consume(e), A) : z(e) && (l === 6 || l === 7) ? n.check(ut, T, I)(e) : e === null || z(e) ? I(e) : (n.consume(e), S)
    }

    function I(e) {
        return n.exit("htmlFlowData"), E(e)
    }

    function E(e) {
        return e === null ? i(e) : z(e) ? n.attempt({
            tokenize: N,
            partial: !0
        }, E, i)(e) : (n.enter("htmlFlowData"), S(e))
    }

    function N(e, pn, hn) {
        return xn;

        function xn(X) {
            return e.enter("lineEnding"), e.consume(X), e.exit("lineEnding"), kn
        }

        function kn(X) {
            return t.parser.lazy[t.now().line] ? hn(X) : pn(X)
        }
    }

    function W(e) {
        return e === 45 ? (n.consume(e), V) : S(e)
    }

    function G(e) {
        return e === 47 ? (n.consume(e), a = "", U) : S(e)
    }

    function U(e) {
        return e === 62 && an.includes(a.toLowerCase()) ? (n.consume(e), T) : O(e) && a.length < 8 ? (n.consume(e), a += String.fromCharCode(e), U) : S(e)
    }

    function A(e) {
        return e === 93 ? (n.consume(e), V) : S(e)
    }

    function V(e) {
        return e === 62 ? (n.consume(e), T) : e === 45 && l === 2 ? (n.consume(e), V) : S(e)
    }

    function T(e) {
        return e === null || z(e) ? (n.exit("htmlFlowData"), i(e)) : (n.consume(e), T)
    }

    function i(e) {
        return n.exit("htmlFlow"), u(e)
    }
}

function ot(n, u, r) {
    return t;

    function t(l) {
        return n.exit("htmlFlowData"), n.enter("lineEndingBlank"), n.consume(l), n.exit("lineEndingBlank"), n.attempt(Z, u, r)
    }
}
const mt = {
    name: "htmlText",
    tokenize: st
};

function st(n, u, r) {
    const t = this;
    let l, m, a, o;
    return s;

    function s(i) {
        return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(i), h
    }

    function h(i) {
        return i === 33 ? (n.consume(i), p) : i === 47 ? (n.consume(i), _) : i === 63 ? (n.consume(i), D) : O(i) ? (n.consume(i), j) : r(i)
    }

    function p(i) {
        return i === 45 ? (n.consume(i), g) : i === 91 ? (n.consume(i), m = "CDATA[", a = 0, Q) : O(i) ? (n.consume(i), q) : r(i)
    }

    function g(i) {
        return i === 45 ? (n.consume(i), b) : r(i)
    }

    function b(i) {
        return i === null || i === 62 ? r(i) : i === 45 ? (n.consume(i), c) : x(i)
    }

    function c(i) {
        return i === null || i === 62 ? r(i) : x(i)
    }

    function x(i) {
        return i === null ? r(i) : i === 45 ? (n.consume(i), H) : z(i) ? (o = x, A(i)) : (n.consume(i), x)
    }

    function H(i) {
        return i === 45 ? (n.consume(i), T) : x(i)
    }

    function Q(i) {
        return i === m.charCodeAt(a++) ? (n.consume(i), a === m.length ? w : Q) : r(i)
    }

    function w(i) {
        return i === null ? r(i) : i === 93 ? (n.consume(i), B) : z(i) ? (o = w, A(i)) : (n.consume(i), w)
    }

    function B(i) {
        return i === 93 ? (n.consume(i), f) : w(i)
    }

    function f(i) {
        return i === 62 ? T(i) : i === 93 ? (n.consume(i), f) : w(i)
    }

    function q(i) {
        return i === null || i === 62 ? T(i) : z(i) ? (o = q, A(i)) : (n.consume(i), q)
    }

    function D(i) {
        return i === null ? r(i) : i === 63 ? (n.consume(i), k) : z(i) ? (o = D, A(i)) : (n.consume(i), D)
    }

    function k(i) {
        return i === 62 ? T(i) : D(i)
    }

    function _(i) {
        return O(i) ? (n.consume(i), R) : r(i)
    }

    function R(i) {
        return i === 45 || M(i) ? (n.consume(i), R) : L(i)
    }

    function L(i) {
        return z(i) ? (o = L, A(i)) : C(i) ? (n.consume(i), L) : T(i)
    }

    function j(i) {
        return i === 45 || M(i) ? (n.consume(i), j) : i === 47 || i === 62 || P(i) ? S(i) : r(i)
    }

    function S(i) {
        return i === 47 ? (n.consume(i), T) : i === 58 || i === 95 || O(i) ? (n.consume(i), I) : z(i) ? (o = S, A(i)) : C(i) ? (n.consume(i), S) : T(i)
    }

    function I(i) {
        return i === 45 || i === 46 || i === 58 || i === 95 || M(i) ? (n.consume(i), I) : E(i)
    }

    function E(i) {
        return i === 61 ? (n.consume(i), N) : z(i) ? (o = E, A(i)) : C(i) ? (n.consume(i), E) : S(i)
    }

    function N(i) {
        return i === null || i === 60 || i === 61 || i === 62 || i === 96 ? r(i) : i === 34 || i === 39 ? (n.consume(i), l = i, W) : z(i) ? (o = N, A(i)) : C(i) ? (n.consume(i), N) : (n.consume(i), l = void 0, U)
    }

    function W(i) {
        return i === l ? (n.consume(i), G) : i === null ? r(i) : z(i) ? (o = W, A(i)) : (n.consume(i), W)
    }

    function G(i) {
        return i === 62 || i === 47 || P(i) ? S(i) : r(i)
    }

    function U(i) {
        return i === null || i === 34 || i === 39 || i === 60 || i === 61 || i === 96 ? r(i) : i === 62 || P(i) ? S(i) : (n.consume(i), U)
    }

    function A(i) {
        return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(i), n.exit("lineEnding"), y(n, V, "linePrefix", t.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
    }

    function V(i) {
        return n.enter("htmlTextData"), o(i)
    }

    function T(i) {
        return i === 62 ? (n.consume(i), n.exit("htmlTextData"), n.exit("htmlText"), u) : r(i)
    }
}
const v = {
        name: "labelEnd",
        tokenize: ct,
        resolveTo: gt,
        resolveAll: kt
    },
    pt = {
        tokenize: zt
    },
    ht = {
        tokenize: St
    },
    xt = {
        tokenize: bt
    };

function kt(n) {
    let u = -1,
        r;
    for (; ++u < n.length;) r = n[u][1], (r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") && (n.splice(u + 1, r.type === "labelImage" ? 4 : 2), r.type = "data", u++);
    return n
}

function gt(n, u) {
    let r = n.length,
        t = 0,
        l, m, a, o;
    for (; r--;)
        if (l = n[r][1], m) {
            if (l.type === "link" || l.type === "labelLink" && l._inactive) break;
            n[r][0] === "enter" && l.type === "labelLink" && (l._inactive = !0)
        } else if (a) {
        if (n[r][0] === "enter" && (l.type === "labelImage" || l.type === "labelLink") && !l._balanced && (m = r, l.type !== "labelLink")) {
            t = 2;
            break
        }
    } else l.type === "labelEnd" && (a = r);
    const s = {
            type: n[m][1].type === "labelLink" ? "link" : "image",
            start: Object.assign({}, n[m][1].start),
            end: Object.assign({}, n[n.length - 1][1].end)
        },
        h = {
            type: "label",
            start: Object.assign({}, n[m][1].start),
            end: Object.assign({}, n[a][1].end)
        },
        p = {
            type: "labelText",
            start: Object.assign({}, n[m + t + 2][1].end),
            end: Object.assign({}, n[a - 2][1].start)
        };
    return o = [
        ["enter", s, u],
        ["enter", h, u]
    ], o = F(o, n.slice(m + 1, m + t + 3)), o = F(o, [
        ["enter", p, u]
    ]), o = F(o, nn(u.parser.constructs.insideSpan.null, n.slice(m + t + 4, a - 3), u)), o = F(o, [
        ["exit", p, u], n[a - 2], n[a - 1],
        ["exit", h, u]
    ]), o = F(o, n.slice(a + 1)), o = F(o, [
        ["exit", s, u]
    ]), Y(n, m, n.length, o), n
}

function ct(n, u, r) {
    const t = this;
    let l = t.events.length,
        m, a;
    for (; l--;)
        if ((t.events[l][1].type === "labelImage" || t.events[l][1].type === "labelLink") && !t.events[l][1]._balanced) {
            m = t.events[l][1];
            break
        }
    return o;

    function o(p) {
        return m ? m._inactive ? h(p) : (a = t.parser.defined.includes($(t.sliceSerialize({
            start: m.end,
            end: t.now()
        }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(p), n.exit("labelMarker"), n.exit("labelEnd"), s) : r(p)
    }

    function s(p) {
        return p === 40 ? n.attempt(pt, u, a ? u : h)(p) : p === 91 ? n.attempt(ht, u, a ? n.attempt(xt, u, h) : h)(p) : a ? u(p) : h(p)
    }

    function h(p) {
        return m._balanced = !0, r(p)
    }
}

function zt(n, u, r) {
    return t;

    function t(s) {
        return n.enter("resource"), n.enter("resourceMarker"), n.consume(s), n.exit("resourceMarker"), J(n, l)
    }

    function l(s) {
        return s === 41 ? o(s) : rn(n, m, r, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(s)
    }

    function m(s) {
        return P(s) ? J(n, a)(s) : o(s)
    }

    function a(s) {
        return s === 34 || s === 39 || s === 40 ? un(n, J(n, o), r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(s) : o(s)
    }

    function o(s) {
        return s === 41 ? (n.enter("resourceMarker"), n.consume(s), n.exit("resourceMarker"), n.exit("resource"), u) : r(s)
    }
}

function St(n, u, r) {
    const t = this;
    return l;

    function l(a) {
        return en.call(t, n, m, r, "reference", "referenceMarker", "referenceString")(a)
    }

    function m(a) {
        return t.parser.defined.includes($(t.sliceSerialize(t.events[t.events.length - 1][1]).slice(1, -1))) ? u(a) : r(a)
    }
}

function bt(n, u, r) {
    return t;

    function t(m) {
        return n.enter("reference"), n.enter("referenceMarker"), n.consume(m), n.exit("referenceMarker"), l
    }

    function l(m) {
        return m === 93 ? (n.enter("referenceMarker"), n.consume(m), n.exit("referenceMarker"), n.exit("reference"), u) : r(m)
    }
}
const yt = {
    name: "labelStartImage",
    tokenize: Et,
    resolveAll: v.resolveAll
};

function Et(n, u, r) {
    const t = this;
    return l;

    function l(o) {
        return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(o), n.exit("labelImageMarker"), m
    }

    function m(o) {
        return o === 91 ? (n.enter("labelMarker"), n.consume(o), n.exit("labelMarker"), n.exit("labelImage"), a) : r(o)
    }

    function a(o) {
        return o === 94 && "_hiddenFootnoteSupport" in t.parser.constructs ? r(o) : u(o)
    }
}
const Ct = {
    name: "labelStartLink",
    tokenize: wt,
    resolveAll: v.resolveAll
};

function wt(n, u, r) {
    const t = this;
    return l;

    function l(a) {
        return n.enter("labelLink"), n.enter("labelMarker"), n.consume(a), n.exit("labelMarker"), n.exit("labelLink"), m
    }

    function m(a) {
        return a === 94 && "_hiddenFootnoteSupport" in t.parser.constructs ? r(a) : u(a)
    }
}
const Lt = {
    name: "lineEnding",
    tokenize: Tt
};

function Tt(n, u) {
    return r;

    function r(t) {
        return n.enter("lineEnding"), n.consume(t), n.exit("lineEnding"), y(n, u, "linePrefix")
    }
}
const mn = {
    name: "thematicBreak",
    tokenize: It
};

function It(n, u, r) {
    let t = 0,
        l;
    return m;

    function m(s) {
        return n.enter("thematicBreak"), l = s, a(s)
    }

    function a(s) {
        return s === l ? (n.enter("thematicBreakSequence"), o(s)) : C(s) ? y(n, a, "whitespace")(s) : t < 3 || s !== null && !z(s) ? r(s) : (n.exit("thematicBreak"), u(s))
    }

    function o(s) {
        return s === l ? (n.consume(s), t++, o) : (n.exit("thematicBreakSequence"), a(s))
    }
}
const sn = {
        name: "list",
        tokenize: Mt,
        continuation: {
            tokenize: Ot
        },
        exit: Bt
    },
    At = {
        tokenize: ft,
        partial: !0
    },
    Ft = {
        tokenize: Pt,
        partial: !0
    };

function Mt(n, u, r) {
    const t = this,
        l = t.events[t.events.length - 1];
    let m = l && l[1].type === "linePrefix" ? l[2].sliceSerialize(l[1], !0).length : 0,
        a = 0;
    return o;

    function o(c) {
        const x = t.containerState.type || (c === 42 || c === 43 || c === 45 ? "listUnordered" : "listOrdered");
        if (x === "listUnordered" ? !t.containerState.marker || c === t.containerState.marker : K(c)) {
            if (t.containerState.type || (t.containerState.type = x, n.enter(x, {
                    _container: !0
                })), x === "listUnordered") return n.enter("listItemPrefix"), c === 42 || c === 45 ? n.check(mn, r, h)(c) : h(c);
            if (!t.interrupt || c === 49) return n.enter("listItemPrefix"), n.enter("listItemValue"), s(c)
        }
        return r(c)
    }

    function s(c) {
        return K(c) && ++a < 10 ? (n.consume(c), s) : (!t.interrupt || a < 2) && (t.containerState.marker ? c === t.containerState.marker : c === 41 || c === 46) ? (n.exit("listItemValue"), h(c)) : r(c)
    }

    function h(c) {
        return n.enter("listItemMarker"), n.consume(c), n.exit("listItemMarker"), t.containerState.marker = t.containerState.marker || c, n.check(Z, t.interrupt ? r : p, n.attempt(At, b, g))
    }

    function p(c) {
        return t.containerState.initialBlankLine = !0, m++, b(c)
    }

    function g(c) {
        return C(c) ? (n.enter("listItemPrefixWhitespace"), n.consume(c), n.exit("listItemPrefixWhitespace"), b) : r(c)
    }

    function b(c) {
        return t.containerState.size = m + t.sliceSerialize(n.exit("listItemPrefix"), !0).length, u(c)
    }
}

function Ot(n, u, r) {
    const t = this;
    return t.containerState._closeFlow = void 0, n.check(Z, l, m);

    function l(o) {
        return t.containerState.furtherBlankLines = t.containerState.furtherBlankLines || t.containerState.initialBlankLine, y(n, u, "listItemIndent", t.containerState.size + 1)(o)
    }

    function m(o) {
        return t.containerState.furtherBlankLines || !C(o) ? (t.containerState.furtherBlankLines = void 0, t.containerState.initialBlankLine = void 0, a(o)) : (t.containerState.furtherBlankLines = void 0, t.containerState.initialBlankLine = void 0, n.attempt(Ft, u, a)(o))
    }

    function a(o) {
        return t.containerState._closeFlow = !0, t.interrupt = void 0, y(n, n.attempt(sn, u, r), "linePrefix", t.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o)
    }
}

function Pt(n, u, r) {
    const t = this;
    return y(n, l, "listItemIndent", t.containerState.size + 1);

    function l(m) {
        const a = t.events[t.events.length - 1];
        return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === t.containerState.size ? u(m) : r(m)
    }
}

function Bt(n) {
    n.exit(this.containerState.type)
}

function ft(n, u, r) {
    const t = this;
    return y(n, l, "listItemPrefixWhitespace", t.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);

    function l(m) {
        const a = t.events[t.events.length - 1];
        return !C(m) && a && a[1].type === "listItemPrefixWhitespace" ? u(m) : r(m)
    }
}
const qt = {
    name: "setextUnderline",
    tokenize: Rt,
    resolveTo: Dt
};

function Dt(n, u) {
    let r = n.length,
        t, l, m;
    for (; r--;)
        if (n[r][0] === "enter") {
            if (n[r][1].type === "content") {
                t = r;
                break
            }
            n[r][1].type === "paragraph" && (l = r)
        } else n[r][1].type === "content" && n.splice(r, 1), !m && n[r][1].type === "definition" && (m = r);
    const a = {
        type: "setextHeading",
        start: Object.assign({}, n[l][1].start),
        end: Object.assign({}, n[n.length - 1][1].end)
    };
    return n[l][1].type = "setextHeadingText", m ? (n.splice(l, 0, ["enter", a, u]), n.splice(m + 1, 0, ["exit", n[t][1], u]), n[t][1].end = Object.assign({}, n[m][1].end)) : n[t][1] = a, n.push(["exit", a, u]), n
}

function Rt(n, u, r) {
    const t = this;
    let l = t.events.length,
        m, a;
    for (; l--;)
        if (t.events[l][1].type !== "lineEnding" && t.events[l][1].type !== "linePrefix" && t.events[l][1].type !== "content") {
            a = t.events[l][1].type === "paragraph";
            break
        }
    return o;

    function o(p) {
        return !t.parser.lazy[t.now().line] && (t.interrupt || a) ? (n.enter("setextHeadingLine"), n.enter("setextHeadingLineSequence"), m = p, s(p)) : r(p)
    }

    function s(p) {
        return p === m ? (n.consume(p), s) : (n.exit("setextHeadingLineSequence"), y(n, h, "lineSuffix")(p))
    }

    function h(p) {
        return p === null || z(p) ? (n.exit("setextHeadingLine"), u(p)) : r(p)
    }
}
export {
    En as attention, Ln as autolink, Z as blankLine, on as blockQuote, On as characterEscape, Bn as characterReference, qn as codeFenced, Rn as codeIndented, Qn as codeText, Un as content, Yn as definition, dn as hardBreakEscape, tt as headingAtx, it as htmlFlow, mt as htmlText, v as labelEnd, yt as labelStartImage, Ct as labelStartLink, Lt as lineEnding, sn as list, qt as setextUnderline, mn as thematicBreak
};
export default null;