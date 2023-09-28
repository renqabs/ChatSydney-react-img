import d from "../react@v17.0.1/react.js";
import {
    VFile as z
} from "../vfile@v5.3.7/vfile.js";
import {
    unified as I
} from "../unified@v10.1.2/unified.js";
import N from "../remark-parse@v10.0.1/remark-parse.js";
import S from "../remark-rehype@v10.1.0/remark-rehype.js";
import i from "../prop-types@v15.8.1/prop-types.js";
import {
    find as H,
    hastToReact as E,
    svg as R,
    html as A
} from "../property-information@v6.2.0/property-information.js";
import {
    visit as D
} from "../unist-util-visit@v4.1.2/unist-util-visit.js";
import x from "../react-is@v18.2.0/react-is.js";
import {
    whitespace as U
} from "../hast-util-whitespace@v2.0.1/hast-util-whitespace.js";
import {
    stringify as $
} from "../space-separated-tokens@v2.0.2/space-separated-tokens.js";
import {
    stringify as F
} from "../comma-separated-tokens@v2.0.3/comma-separated-tokens.js";
import V from "../style-to-object@v0.4.1/style-to-object.js";
const b = ["http", "https", "mailto", "tel"];

function v(e) {
    const r = (e || "").trim(),
        s = r.charAt(0);
    if (s === "#" || s === "/") return r;
    const l = r.indexOf(":");
    if (l === -1) return r;
    let t = -1;
    for (; ++t < b.length;) {
        const o = b[t];
        if (l === o.length && r.slice(0, o.length).toLowerCase() === o) return r
    }
    return t = r.indexOf("?"), t !== -1 && l > t ? r : (t = r.indexOf("#"), t !== -1 && l > t ? r : "javascript:void(0)")
}

function C(e) {
    if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
    if (e.allowedElements || e.disallowedElements || e.allowElement) return r => {
        D(r, "element", (s, l, t) => {
            const o = t;
            let m;
            return e.allowedElements ? m = !e.allowedElements.includes(s.tagName) : e.disallowedElements && (m = e.disallowedElements.includes(s.tagName)), !m && e.allowElement && typeof l == "number" && (m = !e.allowElement(s, l, o)), m && typeof l == "number" ? (e.unwrapDisallowed && s.children ? o.children.splice(l, 1, ...s.children) : o.children.splice(l, 1), l) : void 0
        })
    }
}
const y = {}.hasOwnProperty,
    W = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

function T(e, r) {
    const s = [];
    let l = -1,
        t;
    for (; ++l < r.children.length;) t = r.children[l], t.type === "element" ? s.push(B(e, t, l, r)) : t.type === "text" ? (r.type !== "element" || !W.has(r.tagName) || !U(t)) && s.push(t.value) : t.type === "raw" && !e.options.skipHtml && s.push(t.value);
    return s
}

function B(e, r, s, l) {
    const t = e.options,
        o = t.transformLinkUri === void 0 ? v : t.transformLinkUri,
        m = e.schema,
        a = r.tagName,
        n = {};
    let w = m,
        f;
    if (m.space === "html" && a === "svg" && (w = R, e.schema = w), r.properties)
        for (f in r.properties) y.call(r.properties, f) && L(n, f, r.properties[f], e);
    (a === "ol" || a === "ul") && e.listDepth++;
    const k = T(e, r);
    (a === "ol" || a === "ul") && e.listDepth--, e.schema = m;
    const P = r.position || {
            start: {
                line: null,
                column: null,
                offset: null
            },
            end: {
                line: null,
                column: null,
                offset: null
            }
        },
        p = t.components && y.call(t.components, a) ? t.components[a] : a,
        c = typeof p == "string" || p === d.Fragment;
    if (!x.isValidElementType(p)) throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);
    if (n.key = s, a === "a" && t.linkTarget && (n.target = typeof t.linkTarget == "function" ? t.linkTarget(String(n.href || ""), r.children, typeof n.title == "string" ? n.title : null) : t.linkTarget), a === "a" && o && (n.href = o(String(n.href || ""), r.children, typeof n.title == "string" ? n.title : null)), !c && a === "code" && l.type === "element" && l.tagName !== "pre" && (n.inline = !0), !c && (a === "h1" || a === "h2" || a === "h3" || a === "h4" || a === "h5" || a === "h6") && (n.level = Number.parseInt(a.charAt(1), 10)), a === "img" && t.transformImageUri && (n.src = t.transformImageUri(String(n.src || ""), String(n.alt || ""), typeof n.title == "string" ? n.title : null)), !c && a === "li" && l.type === "element") {
        const h = K(r);
        n.checked = h && h.properties ? Boolean(h.properties.checked) : null, n.index = g(l, r), n.ordered = l.tagName === "ol"
    }
    return !c && (a === "ol" || a === "ul") && (n.ordered = a === "ol", n.depth = e.listDepth), (a === "td" || a === "th") && (n.align && (n.style || (n.style = {}), n.style.textAlign = n.align, delete n.align), c || (n.isHeader = a === "th")), !c && a === "tr" && l.type === "element" && (n.isHeader = Boolean(l.tagName === "thead")), t.sourcePos && (n["data-sourcepos"] = M(P)), !c && t.rawSourcePos && (n.sourcePosition = r.position), !c && t.includeElementIndex && (n.index = g(l, r), n.siblingCount = g(l)), c || (n.node = r), k.length > 0 ? d.createElement(p, n, k) : d.createElement(p, n)
}

function K(e) {
    let r = -1;
    for (; ++r < e.children.length;) {
        const s = e.children[r];
        if (s.type === "element" && s.tagName === "input") return s
    }
    return null
}

function g(e, r) {
    let s = -1,
        l = 0;
    for (; ++s < e.children.length && !(e.children[s] === r);) e.children[s].type === "element" && l++;
    return l
}

function L(e, r, s, l) {
    const t = H(l.schema, r);
    let o = s;
    if (o == null || o !== o) return;
    Array.isArray(o) && (o = t.commaSeparated ? F(o) : $(o)), t.property === "style" && typeof o == "string" && (o = Z(o)), t.space && t.property ? e[y.call(E, t.property) ? E[t.property] : t.property] = o : t.attribute && (e[t.attribute] = o)
}

function Z(e) {
    const r = {};
    try {
        V(e, s)
    } catch {}
    return r;

    function s(l, t) {
        const o = l.slice(0, 4) === "-ms-" ? `ms-${l.slice(4)}` : l;
        r[o.replace(/-([a-z])/g, G)] = t
    }
}

function G(e, r) {
    return r.toUpperCase()
}

function M(e) {
    return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column].map(String).join("")
}
const j = {}.hasOwnProperty,
    Q = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    u = {
        plugins: {
            to: "remarkPlugins",
            id: "change-plugins-to-remarkplugins"
        },
        renderers: {
            to: "components",
            id: "change-renderers-to-components"
        },
        astPlugins: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        allowDangerousHtml: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        escapeHtml: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        source: {
            to: "children",
            id: "change-source-to-children"
        },
        allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex"
        }
    };

function O(e) {
    for (const o in u)
        if (j.call(u, o) && j.call(e, o)) {
            const m = u[o];
            console.warn(`[react-markdown] Warning: please ${m.to?`use \`${m.to}\` instead of`:"remove"} \`${o}\` (see <${Q}#${m.id}> for more info)`), delete u[o]
        }
    const r = I().use(N).use(e.remarkPlugins || []).use(S, { ...e.remarkRehypeOptions,
            allowDangerousHtml: !0
        }).use(e.rehypePlugins || []).use(C, e),
        s = new z;
    typeof e.children == "string" ? s.value = e.children : e.children !== void 0 && e.children !== null && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
    const l = r.runSync(r.parse(s), s);
    if (l.type !== "root") throw new TypeError("Expected a `root` node");
    let t = d.createElement(d.Fragment, {}, T({
        options: e,
        schema: A,
        listDepth: 0
    }, l));
    return e.className && (t = d.createElement("div", {
        className: e.className
    }, t)), t
}
O.propTypes = {
    children: i.string,
    className: i.string,
    allowElement: i.func,
    allowedElements: i.arrayOf(i.string),
    disallowedElements: i.arrayOf(i.string),
    unwrapDisallowed: i.bool,
    remarkPlugins: i.arrayOf(i.oneOfType([i.object, i.func, i.arrayOf(i.oneOfType([i.bool, i.string, i.object, i.func, i.arrayOf(i.any)]))])),
    rehypePlugins: i.arrayOf(i.oneOfType([i.object, i.func, i.arrayOf(i.oneOfType([i.bool, i.string, i.object, i.func, i.arrayOf(i.any)]))])),
    sourcePos: i.bool,
    rawSourcePos: i.bool,
    skipHtml: i.bool,
    includeElementIndex: i.bool,
    transformLinkUri: i.oneOfType([i.func, i.bool]),
    linkTarget: i.oneOfType([i.func, i.string]),
    transformImageUri: i.func,
    components: i.object
};
export default O;
export {
    v as uriTransformer
};