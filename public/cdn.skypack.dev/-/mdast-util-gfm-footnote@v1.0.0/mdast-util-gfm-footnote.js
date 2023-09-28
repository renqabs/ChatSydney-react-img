import {
    normalizeIdentifier as d
} from "../micromark-util-normalize-identifier@v1.0.0/micromark-util-normalize-identifier.js";
import {
    association as g
} from "../mdast-util-to-markdown@v1.2.6/lib/util/association.js";
import {
    containerFlow as D
} from "../mdast-util-to-markdown@v1.2.6/lib/util/container-flow.js";
import {
    indentLines as v
} from "../mdast-util-to-markdown@v1.2.6/lib/util/indent-lines.js";
import {
    safe as h
} from "../mdast-util-to-markdown@v1.2.6/lib/util/safe.js";
import {
    visit as w,
    EXIT as C
} from "../unist-util-visit@v4.1.0/unist-util-visit.js";
let p = !1,
    b = !1;

function z() {
    return {
        enter: {
            gfmFootnoteDefinition: f,
            gfmFootnoteDefinitionLabelString: a,
            gfmFootnoteCall: m,
            gfmFootnoteCallString: e
        },
        exit: {
            gfmFootnoteDefinition: i,
            gfmFootnoteDefinitionLabelString: l,
            gfmFootnoteCall: s,
            gfmFootnoteCallString: r
        }
    };

    function f(t) {
        this.enter({
            type: "footnoteDefinition",
            identifier: "",
            label: "",
            children: []
        }, t)
    }

    function a() {
        this.buffer()
    }

    function l(t) {
        const n = this.resume(),
            o = this.stack[this.stack.length - 1];
        o.label = n, o.identifier = d(this.sliceSerialize(t)).toLowerCase()
    }

    function i(t) {
        this.exit(t)
    }

    function m(t) {
        this.enter({
            type: "footnoteReference",
            identifier: "",
            label: ""
        }, t)
    }

    function e() {
        this.buffer()
    }

    function r(t) {
        const n = this.resume(),
            o = this.stack[this.stack.length - 1];
        o.label = n, o.identifier = d(this.sliceSerialize(t)).toLowerCase()
    }

    function s(t) {
        this.exit(t)
    }
}

function S() {
    return f.peek = a, {
        unsafe: [{
            character: "[",
            inConstruct: ["phrasing", "label", "reference"]
        }],
        handlers: {
            footnoteDefinition: l,
            footnoteReference: f
        }
    };

    function f(i, m, e) {
        const r = e.enter("footnoteReference"),
            s = e.enter("reference"),
            t = h(e, g(i), {
                before: "^",
                after: "]"
            });
        return s(), r(), "[^" + t + "]"
    }

    function a() {
        return "["
    }

    function l(i, m, e) {
        const r = e.enter("footnoteDefinition"),
            s = e.enter("label"),
            t = h(e, g(i), {
                before: "^",
                after: "]"
            }),
            n = "[^" + t + "]:";
        s();
        const o = v(D(i, e), F);
        return r(), !p && t.includes(":") && (console.warn("[mdast-util-gfm-footnote] Warning: Found a colon in footnote identifier `" + t + "`. GitHub currently crahes on colons in footnotes (see <https://github.com/github/cmark-gfm/issues/241> for more info)"), p = !0), b || w(i, "list", () => (console.warn("[mdast-util-gfm-footnote] Warning: Found a list in a footnote definition. GitHub currently crahes on lists in footnotes (see <https://github.com/github/cmark-gfm/issues/241> for more info)"), b = !0, C)), o;

        function F(u, k, c) {
            return k ? (c ? "" : "    ") + u : (c ? n : n + " ") + u
        }
    }
}
export {
    z as gfmFootnoteFromMarkdown, S as gfmFootnoteToMarkdown
};
export default null;