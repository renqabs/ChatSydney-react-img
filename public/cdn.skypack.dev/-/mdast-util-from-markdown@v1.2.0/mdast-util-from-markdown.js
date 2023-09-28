import {
    toString as Re
} from "../mdast-util-to-string@v3.1.0/mdast-util-to-string.js";
import {
    parse as Be
} from "../micromark@v3.0.10/micromark/lib/parse.js";
import {
    preprocess as je
} from "../micromark@v3.0.10/micromark/lib/preprocess.js";
import {
    postprocess as Ce
} from "../micromark@v3.0.10/micromark/lib/postprocess.js";
import {
    decodeNumericCharacterReference as Le
} from "../micromark-util-decode-numeric-character-reference@v1.0.0/micromark-util-decode-numeric-character-reference.js";
import {
    decodeString as Ve
} from "../micromark-util-decode-string@v1.0.2/micromark-util-decode-string.js";
import {
    normalizeIdentifier as F
} from "../micromark-util-normalize-identifier@v1.0.0/micromark-util-normalize-identifier.js";
import {
    decodeNamedCharacterReference as He
} from "../decode-named-character-reference@v1.0.1-w/decode-named-character-reference.js";
import {
    stringifyPosition as I
} from "../unist-util-stringify-position@v3.0.0/unist-util-stringify-position.js";
const R = {}.hasOwnProperty,
    Pe = function(u, s, d) {
        return typeof s != "string" && (d = s, s = void 0), Oe(d)(Ce(Be(d).document().write(je()(u, s, !0))))
    };

function Oe(u = {}) {
    const s = M({
            transforms: [],
            canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
            enter: {
                autolink: c(D),
                autolinkProtocol: g,
                autolinkEmail: g,
                atxHeading: c(H),
                blockQuote: c(xe),
                characterEscape: g,
                characterReference: g,
                codeFenced: c(V),
                codeFencedFenceInfo: p,
                codeFencedFenceMeta: p,
                codeIndented: c(V, p),
                codeText: c(ye, p),
                codeTextData: g,
                data: g,
                codeFlowValue: g,
                definition: c(Se),
                definitionDestinationString: p,
                definitionLabelString: p,
                definitionTitleString: p,
                emphasis: c(be),
                hardBreakEscape: c(P),
                hardBreakTrailing: c(P),
                htmlFlow: c(O, p),
                htmlFlowData: g,
                htmlText: c(O, p),
                htmlTextData: g,
                image: c(Te),
                label: p,
                link: c(D),
                listItem: c(we),
                listItemValue: U,
                listOrdered: c(Q, N),
                listUnordered: c(Q),
                paragraph: c(Ie),
                reference: he,
                referenceString: p,
                resourceDestinationString: p,
                resourceTitleString: p,
                setextHeading: c(H),
                strong: c(ze),
                thematicBreak: c(Fe)
            },
            exit: {
                atxHeading: o(),
                atxHeadingSequence: $,
                autolink: o(),
                autolinkEmail: ke,
                autolinkProtocol: ge,
                blockQuote: o(),
                characterEscapeValue: k,
                characterReferenceMarkerHexadecimal: L,
                characterReferenceMarkerNumeric: L,
                characterReferenceValue: me,
                codeFenced: o(A),
                codeFencedFence: X,
                codeFencedFenceInfo: Y,
                codeFencedFenceMeta: v,
                codeFlowValue: k,
                codeIndented: o(J),
                codeText: o(se),
                codeTextData: k,
                data: k,
                definition: o(),
                definitionDestinationString: G,
                definitionLabelString: _,
                definitionTitleString: Z,
                emphasis: o(),
                hardBreakEscape: o(C),
                hardBreakTrailing: o(C),
                htmlFlow: o(ne),
                htmlFlowData: k,
                htmlText: o(re),
                htmlTextData: k,
                image: o(oe),
                label: le,
                labelText: ae,
                lineEnding: ie,
                link: o(ce),
                listItem: o(),
                listOrdered: o(),
                listUnordered: o(),
                paragraph: o(),
                referenceString: pe,
                resourceDestinationString: de,
                resourceTitleString: ue,
                resource: fe,
                setextHeading: o(te),
                setextHeadingLineSequence: ee,
                setextHeadingText: K,
                strong: o(),
                thematicBreak: o()
            }
        }, u.mdastExtensions || []),
        d = {};
    return y;

    function y(e) {
        let t = {
            type: "root",
            children: []
        };
        const i = [t],
            n = [],
            m = [],
            T = {
                stack: i,
                tokenStack: n,
                config: s,
                enter: B,
                exit: j,
                buffer: p,
                resume: q,
                setData: l,
                getData: h
            };
        let r = -1;
        for (; ++r < e.length;)
            if (e[r][1].type === "listOrdered" || e[r][1].type === "listUnordered")
                if (e[r][0] === "enter") m.push(r);
                else {
                    const f = m.pop();
                    r = z(e, f, r)
                }
        for (r = -1; ++r < e.length;) {
            const f = s[e[r][0]];
            R.call(f, e[r][1].type) && f[e[r][1].type].call(Object.assign({
                sliceSerialize: e[r][2].sliceSerialize
            }, T), e[r][1])
        }
        if (n.length > 0) {
            const f = n[n.length - 1],
                b = f[1] || W;
            b.call(T, void 0, f[0])
        }
        for (t.position = {
                start: S(e.length > 0 ? e[0][1].start : {
                    line: 1,
                    column: 1,
                    offset: 0
                }),
                end: S(e.length > 0 ? e[e.length - 2][1].end : {
                    line: 1,
                    column: 1,
                    offset: 0
                })
            }, r = -1; ++r < s.transforms.length;) t = s.transforms[r](t) || t;
        return t
    }

    function z(e, t, i) {
        let n = t - 1,
            m = -1,
            T = !1,
            r, f, b, w;
        for (; ++n <= i;) {
            const a = e[n];
            if (a[1].type === "listUnordered" || a[1].type === "listOrdered" || a[1].type === "blockQuote" ? (a[0] === "enter" ? m++ : m--, w = void 0) : a[1].type === "lineEndingBlank" ? a[0] === "enter" && (r && !w && !m && !b && (b = n), w = void 0) : a[1].type === "linePrefix" || a[1].type === "listItemValue" || a[1].type === "listItemMarker" || a[1].type === "listItemPrefix" || a[1].type === "listItemPrefixWhitespace" || (w = void 0), !m && a[0] === "enter" && a[1].type === "listItemPrefix" || m === -1 && a[0] === "exit" && (a[1].type === "listUnordered" || a[1].type === "listOrdered")) {
                if (r) {
                    let E = n;
                    for (f = void 0; E--;) {
                        const x = e[E];
                        if (x[1].type === "lineEnding" || x[1].type === "lineEndingBlank") {
                            if (x[0] === "exit") continue;
                            f && (e[f][1].type = "lineEndingBlank", T = !0), x[1].type = "lineEnding", f = E
                        } else if (!(x[1].type === "linePrefix" || x[1].type === "blockQuotePrefix" || x[1].type === "blockQuotePrefixWhitespace" || x[1].type === "blockQuoteMarker" || x[1].type === "listItemIndent")) break
                    }
                    b && (!f || b < f) && (r._spread = !0), r.end = Object.assign({}, f ? e[f][1].start : a[1].end), e.splice(f || n, 0, ["exit", r, a[2]]), n++, i++
                }
                a[1].type === "listItemPrefix" && (r = {
                    type: "listItem",
                    _spread: !1,
                    start: Object.assign({}, a[1].start)
                }, e.splice(n, 0, ["enter", r, a[2]]), n++, i++, b = void 0, w = !0)
            }
        }
        return e[t][1]._spread = T, i
    }

    function l(e, t) {
        d[e] = t
    }

    function h(e) {
        return d[e]
    }

    function S(e) {
        return {
            line: e.line,
            column: e.column,
            offset: e.offset
        }
    }

    function c(e, t) {
        return i;

        function i(n) {
            B.call(this, e(n), n), t && t.call(this, n)
        }
    }

    function p() {
        this.stack.push({
            type: "fragment",
            children: []
        })
    }

    function B(e, t, i) {
        const n = this.stack[this.stack.length - 1];
        return n.children.push(e), this.stack.push(e), this.tokenStack.push([t, i]), e.position = {
            start: S(t.start)
        }, e
    }

    function o(e) {
        return t;

        function t(i) {
            e && e.call(this, i), j.call(this, i)
        }
    }

    function j(e, t) {
        const i = this.stack.pop(),
            n = this.tokenStack.pop();
        if (n) {
            if (n[0].type !== e.type)
                if (t) t.call(this, e, n[0]);
                else {
                    const m = n[1] || W;
                    m.call(this, e, n[0])
                }
        } else throw new Error("Cannot close `" + e.type + "` (" + I({
            start: e.start,
            end: e.end
        }) + "): it\u2019s not open");
        return i.position.end = S(e.end), i
    }

    function q() {
        return Re(this.stack.pop())
    }

    function N() {
        l("expectingFirstListItemValue", !0)
    }

    function U(e) {
        if (h("expectingFirstListItemValue")) {
            const t = this.stack[this.stack.length - 2];
            t.start = Number.parseInt(this.sliceSerialize(e), 10), l("expectingFirstListItemValue")
        }
    }

    function Y() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.lang = e
    }

    function v() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.meta = e
    }

    function X() {
        if (h("flowCodeInside")) return;
        this.buffer(), l("flowCodeInside", !0)
    }

    function A() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), l("flowCodeInside")
    }

    function J() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.value = e.replace(/(\r?\n|\r)$/g, "")
    }

    function _(e) {
        const t = this.resume(),
            i = this.stack[this.stack.length - 1];
        i.label = t, i.identifier = F(this.sliceSerialize(e)).toLowerCase()
    }

    function Z() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.title = e
    }

    function G() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.url = e
    }

    function $(e) {
        const t = this.stack[this.stack.length - 1];
        if (!t.depth) {
            const i = this.sliceSerialize(e).length;
            t.depth = i
        }
    }

    function K() {
        l("setextHeadingSlurpLineEnding", !0)
    }

    function ee(e) {
        const t = this.stack[this.stack.length - 1];
        t.depth = this.sliceSerialize(e).charCodeAt(0) === 61 ? 1 : 2
    }

    function te() {
        l("setextHeadingSlurpLineEnding")
    }

    function g(e) {
        const t = this.stack[this.stack.length - 1];
        let i = t.children[t.children.length - 1];
        (!i || i.type !== "text") && (i = Ee(), i.position = {
            start: S(e.start)
        }, t.children.push(i)), this.stack.push(i)
    }

    function k(e) {
        const t = this.stack.pop();
        t.value += this.sliceSerialize(e), t.position.end = S(e.end)
    }

    function ie(e) {
        const t = this.stack[this.stack.length - 1];
        if (h("atHardBreak")) {
            const i = t.children[t.children.length - 1];
            i.position.end = S(e.end), l("atHardBreak");
            return
        }!h("setextHeadingSlurpLineEnding") && s.canContainEols.includes(t.type) && (g.call(this, e), k.call(this, e))
    }

    function C() {
        l("atHardBreak", !0)
    }

    function ne() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.value = e
    }

    function re() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.value = e
    }

    function se() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.value = e
    }

    function ce() {
        const e = this.stack[this.stack.length - 1];
        h("inReference") ? (e.type += "Reference", e.referenceType = h("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label), l("referenceType")
    }

    function oe() {
        const e = this.stack[this.stack.length - 1];
        h("inReference") ? (e.type += "Reference", e.referenceType = h("referenceType") || "shortcut", delete e.url, delete e.title) : (delete e.identifier, delete e.label), l("referenceType")
    }

    function ae(e) {
        const t = this.stack[this.stack.length - 2],
            i = this.sliceSerialize(e);
        t.label = Ve(i), t.identifier = F(i).toLowerCase()
    }

    function le() {
        const e = this.stack[this.stack.length - 1],
            t = this.resume(),
            i = this.stack[this.stack.length - 1];
        l("inReference", !0), i.type === "link" ? i.children = e.children : i.alt = t
    }

    function de() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.url = e
    }

    function ue() {
        const e = this.resume(),
            t = this.stack[this.stack.length - 1];
        t.title = e
    }

    function fe() {
        l("inReference")
    }

    function he() {
        l("referenceType", "collapsed")
    }

    function pe(e) {
        const t = this.resume(),
            i = this.stack[this.stack.length - 1];
        i.label = t, i.identifier = F(this.sliceSerialize(e)).toLowerCase(), l("referenceType", "full")
    }

    function L(e) {
        l("characterReferenceType", e.type)
    }

    function me(e) {
        const t = this.sliceSerialize(e),
            i = h("characterReferenceType");
        let n;
        i ? (n = Le(t, i === "characterReferenceMarkerNumeric" ? 10 : 16), l("characterReferenceType")) : n = He(t);
        const m = this.stack.pop();
        m.value += n, m.position.end = S(e.end)
    }

    function ge(e) {
        k.call(this, e);
        const t = this.stack[this.stack.length - 1];
        t.url = this.sliceSerialize(e)
    }

    function ke(e) {
        k.call(this, e);
        const t = this.stack[this.stack.length - 1];
        t.url = "mailto:" + this.sliceSerialize(e)
    }

    function xe() {
        return {
            type: "blockquote",
            children: []
        }
    }

    function V() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        }
    }

    function ye() {
        return {
            type: "inlineCode",
            value: ""
        }
    }

    function Se() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        }
    }

    function be() {
        return {
            type: "emphasis",
            children: []
        }
    }

    function H() {
        return {
            type: "heading",
            depth: void 0,
            children: []
        }
    }

    function P() {
        return {
            type: "break"
        }
    }

    function O() {
        return {
            type: "html",
            value: ""
        }
    }

    function Te() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        }
    }

    function D() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        }
    }

    function Q(e) {
        return {
            type: "list",
            ordered: e.type === "listOrdered",
            start: null,
            spread: e._spread,
            children: []
        }
    }

    function we(e) {
        return {
            type: "listItem",
            spread: e._spread,
            checked: null,
            children: []
        }
    }

    function Ie() {
        return {
            type: "paragraph",
            children: []
        }
    }

    function ze() {
        return {
            type: "strong",
            children: []
        }
    }

    function Ee() {
        return {
            type: "text",
            value: ""
        }
    }

    function Fe() {
        return {
            type: "thematicBreak"
        }
    }
}

function M(u, s) {
    let d = -1;
    for (; ++d < s.length;) {
        const y = s[d];
        Array.isArray(y) ? M(u, y) : De(u, y)
    }
    return u
}

function De(u, s) {
    let d;
    for (d in s)
        if (R.call(s, d)) {
            const y = d === "canContainEols" || d === "transforms",
                z = R.call(u, d) ? u[d] : void 0,
                l = z || (u[d] = y ? [] : {}),
                h = s[d];
            h && (y ? u[d] = [...l, ...h] : Object.assign(l, h))
        }
}

function W(u, s) {
    throw u ? new Error("Cannot close `" + u.type + "` (" + I({
        start: u.start,
        end: u.end
    }) + "): a different token (`" + s.type + "`, " + I({
        start: s.start,
        end: s.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + s.type + "`, " + I({
        start: s.start,
        end: s.end
    }) + ") is still open")
}
export {
    Pe as fromMarkdown
};
export default null;