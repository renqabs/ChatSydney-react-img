import {
    convert as N
} from "../unist-util-is@v5.1.1-F/unist-util-is.js";

function j(n) {
    return n
}
const g = !0,
    d = "skip",
    s = !1,
    I = function(n, e, c, o) {
        typeof e == "function" && typeof c != "function" && (o = c, c = e, e = null);
        var b = N(e),
            m = o ? -1 : 1;
        p(n, null, [])();

        function p(t, v, l) {
            var i = typeof t == "object" && t !== null ? t : {},
                a;
            return typeof i.type == "string" && (a = typeof i.tagName == "string" ? i.tagName : typeof i.name == "string" ? i.name : void 0, Object.defineProperty(y, "name", {
                value: "node (" + j(i.type + (a ? "<" + a + ">" : "")) + ")"
            })), y;

            function y() {
                var f = [],
                    u, r, h;
                if ((!e || b(t, v, l[l.length - 1] || null)) && (f = P(c(t, l)), f[0] === s)) return f;
                if (t.children && f[0] !== d)
                    for (r = (o ? t.children.length : -1) + m, h = l.concat(t); r > -1 && r < t.children.length;) {
                        if (u = p(t.children[r], r, h)(), u[0] === s) return u;
                        r = typeof u[1] == "number" ? u[1] : r + m
                    }
                return f
            }
        }
    };

function P(n) {
    return Array.isArray(n) ? n : typeof n == "number" ? [g, n] : [n]
}
export {
    g as CONTINUE, s as EXIT, d as SKIP, I as visitParents
};
export default null;