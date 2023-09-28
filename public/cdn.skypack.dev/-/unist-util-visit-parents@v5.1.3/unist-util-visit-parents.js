import {
    convert as I
} from "../unist-util-is@v5.2.0/unist-util-is.js";

function N(n) {
    return n
}
const g = !0,
    s = !1,
    h = "skip",
    j = function(n, r, o, l) {
        typeof r == "function" && typeof o != "function" && (l = o, o = r, r = null);
        const b = I(r),
            p = l ? -1 : 1;
        m(n, void 0, [])();

        function m(t, d, c) {
            const f = t && typeof t == "object" ? t : {};
            if (typeof f.type == "string") {
                const e = typeof f.tagName == "string" ? f.tagName : typeof f.name == "string" ? f.name : void 0;
                Object.defineProperty(y, "name", {
                    value: "node (" + N(t.type + (e ? "<" + e + ">" : "")) + ")"
                })
            }
            return y;

            function y() {
                let e = [],
                    u, i, a;
                if ((!r || b(t, d, c[c.length - 1] || null)) && (e = A(o(t, c)), e[0] === s)) return e;
                if (t.children && e[0] !== h)
                    for (i = (l ? t.children.length : -1) + p, a = c.concat(t); i > -1 && i < t.children.length;) {
                        if (u = m(t.children[i], i, a)(), u[0] === s) return u;
                        i = typeof u[1] == "number" ? u[1] : i + p
                    }
                return e
            }
        }
    };

function A(n) {
    return Array.isArray(n) ? n : typeof n == "number" ? [g, n] : [n]
}
export {
    g as CONTINUE, s as EXIT, h as SKIP, j as visitParents
};
export default null;