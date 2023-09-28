import E from "../escape-string-regexp@v5.0.0/escape-string-regexp.js";
import {
    visitParents as I
} from "../unist-util-visit-parents@v5.1.3/unist-util-visit-parents.js";
import {
    convert as U
} from "../unist-util-is@v5.2.0/unist-util-is.js";
const k = {}.hasOwnProperty,
    P = function(t, r, e, A) {
        let p, g;
        typeof r == "string" || r instanceof RegExp ? (g = [
            [r, e]
        ], p = A) : (g = r, p = e), p || (p = {});
        const j = U(p.ignore || []),
            d = R(g);
        let x = -1;
        for (; ++x < d.length;) I(t, "text", z);
        return t;

        function z(i, l) {
            let c = -1,
                n;
            for (; ++c < l.length;) {
                const f = l[c];
                if (j(f, n ? n.children.indexOf(f) : void 0, n)) return;
                n = f
            }
            if (n) return O(i, l)
        }

        function O(i, l) {
            const c = l[l.length - 1],
                n = d[x][0],
                f = d[x][1];
            let a = 0;
            const v = c.children.indexOf(i);
            let y = !1,
                o = [];
            n.lastIndex = 0;
            let u = n.exec(i.value);
            for (; u;) {
                const h = u.index,
                    b = {
                        index: u.index,
                        input: u.input,
                        stack: [...l, i]
                    };
                let s = f(...u, b);
                if (typeof s == "string" && (s = s.length > 0 ? {
                        type: "text",
                        value: s
                    } : void 0), s !== !1 && (a !== h && o.push({
                        type: "text",
                        value: i.value.slice(a, h)
                    }), Array.isArray(s) ? o.push(...s) : s && o.push(s), a = h + u[0].length, y = !0), !n.global) break;
                u = n.exec(i.value)
            }
            return y ? (a < i.value.length && o.push({
                type: "text",
                value: i.value.slice(a)
            }), c.children.splice(v, 1, ...o)) : o = [i], v + o.length
        }
    };

function R(t) {
    const r = [];
    if (typeof t != "object") throw new TypeError("Expected array or object as schema");
    if (Array.isArray(t)) {
        let e = -1;
        for (; ++e < t.length;) r.push([m(t[e][0]), w(t[e][1])])
    } else {
        let e;
        for (e in t) k.call(t, e) && r.push([m(e), w(t[e])])
    }
    return r
}

function m(t) {
    return typeof t == "string" ? new RegExp(E(t), "g") : t
}

function w(t) {
    return typeof t == "function" ? t : () => t
}
export {
    P as findAndReplace
};
export default null;