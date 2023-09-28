import {
    convert as A
} from "../unist-util-is@v5.1.1-w/unist-util-is.js";

function N(n) {
    return n
}
const h = !0,
    b = "skip",
    p = !1,
    O = function(n, r, l, c) {
        typeof r == "function" && typeof l != "function" && (c = l, l = r, r = null);
        const d = A(r),
            m = c ? -1 : 1;
        y(n, null, [])();

        function y(t, x, o) {
            const i = typeof t == "object" && t !== null ? t : {};
            let s;
            return typeof i.type == "string" && (s = typeof i.tagName == "string" ? i.tagName : typeof i.name == "string" ? i.name : void 0, Object.defineProperty(a, "name", {
                value: "node (" + N(i.type + (s ? "<" + s + ">" : "")) + ")"
            })), a;

            function a() {
                let u = [],
                    f, e, g;
                if ((!r || d(t, x, o[o.length - 1] || null)) && (u = j(l(t, o)), u[0] === p)) return u;
                if (t.children && u[0] !== b)
                    for (e = (c ? t.children.length : -1) + m, g = o.concat(t); e > -1 && e < t.children.length;) {
                        if (f = y(t.children[e], e, g)(), f[0] === p) return f;
                        e = typeof f[1] == "number" ? f[1] : e + m
                    }
                return u
            }
        }
    };

function j(n) {
    return Array.isArray(n) ? n : typeof n == "number" ? [h, n] : [n]
}
export {
    h as CONTINUE, p as EXIT, b as SKIP, O as visitParents
};
export default null;