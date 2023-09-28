import {
    u as c
} from "../unist-builder@v3.0.0/unist-builder.js";
import {
    visit as P
} from "../unist-util-visit@v4.1.0/unist-util-visit.js";
import {
    pointStart as b,
    pointEnd as v
} from "../unist-util-position@v4.0.1/unist-util-position.js";
import {
    generated as z
} from "../unist-util-generated@v2.0.0/unist-util-generated.js";
import {
    definitions as I
} from "../mdast-util-definitions@v5.1.0/mdast-util-definitions.js";
import {
    sanitizeUri as k
} from "../micromark-util-sanitize-uri@v1.0.0/micromark-util-sanitize-uri.js";
import h from "../mdurl@v1.0.1/encode.js";
const g = {}.hasOwnProperty;

function L(e, t) {
    const n = t.data || {};
    return "value" in t && !(g.call(n, "hName") || g.call(n, "hProperties") || g.call(n, "hChildren")) ? e.augment(t, c("text", t.value)) : e(t, "div", f(e, t))
}

function x(e, t, n) {
    const i = t && t.type;
    let r;
    if (!i) throw new Error("Expected node, got `" + t + "`");
    return g.call(e.handlers, i) ? r = e.handlers[i] : e.passThrough && e.passThrough.includes(i) ? r = A : r = e.unknownHandler, (typeof r == "function" ? r : L)(e, t, n)
}

function A(e, t) {
    return "children" in t ? { ...t,
        children: f(e, t)
    } : t
}

function f(e, t) {
    const n = [];
    if ("children" in t) {
        const i = t.children;
        let r = -1;
        for (; ++r < i.length;) {
            const o = x(e, i[r], t);
            if (o) {
                if (r && i[r - 1].type === "break" && (!Array.isArray(o) && o.type === "text" && (o.value = o.value.replace(/^\s+/, "")), !Array.isArray(o) && o.type === "element")) {
                    const l = o.children[0];
                    l && l.type === "text" && (l.value = l.value.replace(/^\s+/, ""))
                }
                Array.isArray(o) ? n.push(...o) : n.push(o)
            }
        }
    }
    return n
}

function m(e, t) {
    const n = [];
    let i = -1;
    for (t && n.push(c("text", `
`)); ++i < e.length;) i && n.push(c("text", `
`)), n.push(e[i]);
    return t && e.length > 0 && n.push(c("text", `
`)), n
}

function O(e) {
    let t = -1;
    const n = [];
    for (; ++t < e.footnoteOrder.length;) {
        const i = e.footnoteById[e.footnoteOrder[t].toUpperCase()];
        if (!i) continue;
        const r = f(e, i),
            o = String(i.identifier),
            l = k(o.toLowerCase());
        let u = 0;
        const a = [];
        for (; ++u <= e.footnoteCounts[o];) {
            const p = {
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + e.clobberPrefix + "fnref-" + l + (u > 1 ? "-" + u : ""),
                    dataFootnoteBackref: !0,
                    className: ["data-footnote-backref"],
                    ariaLabel: e.footnoteBackLabel
                },
                children: [{
                    type: "text",
                    value: "\u21A9"
                }]
            };
            u > 1 && p.children.push({
                type: "element",
                tagName: "sup",
                children: [{
                    type: "text",
                    value: String(u)
                }]
            }), a.length > 0 && a.push({
                type: "text",
                value: " "
            }), a.push(p)
        }
        const s = r[r.length - 1];
        if (s && s.type === "element" && s.tagName === "p") {
            const p = s.children[s.children.length - 1];
            p && p.type === "text" ? p.value += " " : s.children.push({
                type: "text",
                value: " "
            }), s.children.push(...a)
        } else r.push(...a);
        const d = {
            type: "element",
            tagName: "li",
            properties: {
                id: e.clobberPrefix + "fn-" + l
            },
            children: m(r, !0)
        };
        i.position && (d.position = i.position), n.push(d)
    }
    return n.length === 0 ? null : {
        type: "element",
        tagName: "section",
        properties: {
            dataFootnotes: !0,
            className: ["footnotes"]
        },
        children: [{
            type: "element",
            tagName: "h2",
            properties: {
                id: "footnote-label",
                className: ["sr-only"]
            },
            children: [c("text", e.footnoteLabel)]
        }, {
            type: "text",
            value: `
`
        }, {
            type: "element",
            tagName: "ol",
            properties: {},
            children: m(n, !0)
        }, {
            type: "text",
            value: `
`
        }]
    }
}

function H(e, t) {
    return e(t, "blockquote", m(f(e, t), !0))
}

function R(e, t) {
    return [e(t, "br"), c("text", `
`)]
}

function T(e, t) {
    const n = t.value ? t.value + `
` : "",
        i = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
        r = {};
    i && (r.className = ["language-" + i]);
    const o = e(t, "code", r, [c("text", n)]);
    return t.meta && (o.data = {
        meta: t.meta
    }), e(t.position, "pre", [o])
}

function j(e, t) {
    return e(t, "del", f(e, t))
}

function D(e, t) {
    return e(t, "em", f(e, t))
}

function N(e, t) {
    const n = String(t.identifier),
        i = k(n.toLowerCase()),
        r = e.footnoteOrder.indexOf(n);
    let o;
    r === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, o = e.footnoteOrder.length) : (e.footnoteCounts[n]++, o = r + 1);
    const l = e.footnoteCounts[n];
    return e(t, "sup", [e(t.position, "a", {
        href: "#" + e.clobberPrefix + "fn-" + i,
        id: e.clobberPrefix + "fnref-" + i + (l > 1 ? "-" + l : ""),
        dataFootnoteRef: !0,
        ariaDescribedBy: "footnote-label"
    }, [c("text", String(o))])])
}

function S(e, t) {
    const n = e.footnoteById;
    let i = 1;
    for (; i in n;) i++;
    const r = String(i);
    return n[r] = {
        type: "footnoteDefinition",
        identifier: r,
        children: [{
            type: "paragraph",
            children: t.children
        }],
        position: t.position
    }, N(e, {
        type: "footnoteReference",
        identifier: r,
        position: t.position
    })
}

function q(e, t) {
    return e(t, "h" + t.depth, f(e, t))
}

function E(e, t) {
    return e.dangerous ? e.augment(t, c("raw", t.value)) : null
}

function w(e, t) {
    const n = t.referenceType;
    let i = "]";
    if (n === "collapsed" ? i += "[]" : n === "full" && (i += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return c("text", "![" + t.alt + i);
    const r = f(e, t),
        o = r[0];
    o && o.type === "text" ? o.value = "[" + o.value : r.unshift(c("text", "["));
    const l = r[r.length - 1];
    return l && l.type === "text" ? l.value += i : r.push(c("text", i)), r
}

function F(e, t) {
    const n = e.definition(t.identifier);
    if (!n) return w(e, t);
    const i = {
        src: h(n.url || ""),
        alt: t.alt
    };
    return n.title !== null && n.title !== void 0 && (i.title = n.title), e(t, "img", i)
}

function U(e, t) {
    const n = {
        src: h(t.url),
        alt: t.alt
    };
    return t.title !== null && t.title !== void 0 && (n.title = t.title), e(t, "img", n)
}

function Q(e, t) {
    return e(t, "code", [c("text", t.value.replace(/\r?\n|\r/g, " "))])
}

function $(e, t) {
    const n = e.definition(t.identifier);
    if (!n) return w(e, t);
    const i = {
        href: h(n.url || "")
    };
    return n.title !== null && n.title !== void 0 && (i.title = n.title), e(t, "a", i, f(e, t))
}

function G(e, t) {
    const n = {
        href: h(t.url)
    };
    return t.title !== null && t.title !== void 0 && (n.title = t.title), e(t, "a", n, f(e, t))
}

function J(e, t, n) {
    const i = f(e, t),
        r = n ? K(n) : C(t),
        o = {},
        l = [];
    if (typeof t.checked == "boolean") {
        let s;
        i[0] && i[0].type === "element" && i[0].tagName === "p" ? s = i[0] : (s = e(null, "p", []), i.unshift(s)), s.children.length > 0 && s.children.unshift(c("text", " ")), s.children.unshift(e(null, "input", {
            type: "checkbox",
            checked: t.checked,
            disabled: !0
        })), o.className = ["task-list-item"]
    }
    let u = -1;
    for (; ++u < i.length;) {
        const s = i[u];
        (r || u !== 0 || s.type !== "element" || s.tagName !== "p") && l.push(c("text", `
`)), s.type === "element" && s.tagName === "p" && !r ? l.push(...s.children) : l.push(s)
    }
    const a = i[i.length - 1];
    return a && (r || !("tagName" in a) || a.tagName !== "p") && l.push(c("text", `
`)), e(t, "li", o, l)
}

function K(e) {
    let t = e.spread;
    const n = e.children;
    let i = -1;
    for (; !t && ++i < n.length;) t = C(n[i]);
    return Boolean(t)
}

function C(e) {
    const t = e.spread;
    return t == null ? e.children.length > 1 : t
}

function W(e, t) {
    const n = {},
        i = t.ordered ? "ol" : "ul",
        r = f(e, t);
    let o = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++o < r.length;) {
        const l = r[o];
        if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
            n.className = ["contains-task-list"];
            break
        }
    }
    return e(t, i, n, m(r, !0))
}

function X(e, t) {
    return e(t, "p", f(e, t))
}

function Y(e, t) {
    return e.augment(t, c("root", m(f(e, t))))
}

function M(e, t) {
    return e(t, "strong", f(e, t))
}

function Z(e, t) {
    const n = t.children;
    let i = -1;
    const r = t.align || [],
        o = [];
    for (; ++i < n.length;) {
        const l = n[i].children,
            u = i === 0 ? "th" : "td",
            a = [];
        let s = -1;
        const d = t.align ? r.length : l.length;
        for (; ++s < d;) {
            const p = l[s];
            a.push(e(p, u, {
                align: r[s]
            }, p ? f(e, p) : []))
        }
        o[i] = e(n[i], "tr", m(a, !0))
    }
    return e(t, "table", m([e(o[0].position, "thead", m([o[0]], !0))].concat(o[1] ? e({
        start: b(o[1]),
        end: v(o[o.length - 1])
    }, "tbody", m(o.slice(1), !0)) : []), !0))
}

function V(e, t) {
    return e.augment(t, c("text", String(t.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, "$1")))
}

function _(e, t) {
    return e(t, "hr")
}
const B = {
    blockquote: H,
    break: R,
    code: T,
    delete: j,
    emphasis: D,
    footnoteReference: N,
    footnote: S,
    heading: q,
    html: E,
    imageReference: F,
    image: U,
    inlineCode: Q,
    linkReference: $,
    link: G,
    listItem: J,
    list: W,
    paragraph: X,
    root: Y,
    strong: M,
    table: Z,
    text: V,
    thematicBreak: _,
    toml: y,
    yaml: y,
    definition: y,
    footnoteDefinition: y
};

function y() {
    return null
}
const tt = {}.hasOwnProperty;

function et(e, t) {
    const n = t || {},
        i = n.allowDangerousHtml || !1,
        r = {};
    return l.dangerous = i, l.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, l.footnoteLabel = n.footnoteLabel || "Footnotes", l.footnoteBackLabel = n.footnoteBackLabel || "Back to content", l.definition = I(e), l.footnoteById = r, l.footnoteOrder = [], l.footnoteCounts = {}, l.augment = o, l.handlers = { ...B,
        ...n.handlers
    }, l.unknownHandler = n.unknownHandler, l.passThrough = n.passThrough, P(e, "footnoteDefinition", u => {
        const a = String(u.identifier).toUpperCase();
        tt.call(r, a) || (r[a] = u)
    }), l;

    function o(u, a) {
        if (u && "data" in u && u.data) {
            const s = u.data;
            s.hName && (a.type !== "element" && (a = {
                type: "element",
                tagName: "",
                properties: {},
                children: []
            }), a.tagName = s.hName), a.type === "element" && s.hProperties && (a.properties = { ...a.properties,
                ...s.hProperties
            }), "children" in a && a.children && s.hChildren && (a.children = s.hChildren)
        }
        if (u) {
            const s = "type" in u ? u : {
                position: u
            };
            z(s) || (a.position = {
                start: b(s),
                end: v(s)
            })
        }
        return a
    }

    function l(u, a, s, d) {
        return Array.isArray(s) && (d = s, s = {}), o(u, {
            type: "element",
            tagName: a,
            properties: s || {},
            children: d || []
        })
    }
}

function nt(e, t) {
    const n = et(e, t),
        i = x(n, e, null),
        r = O(n);
    return r && i.children.push(c("text", `
`), r), Array.isArray(i) ? {
        type: "root",
        children: i
    } : i
}
export {
    f as all, B as defaultHandlers, x as one, nt as toHast
};
export default null;