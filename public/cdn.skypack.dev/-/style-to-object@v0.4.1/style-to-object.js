import v from "../inline-style-parser@v0.1.1/inline-style-parser.js";

function p(a, n) {
    var e = null;
    if (!a || typeof a != "string") return e;
    for (var r, i = v(a), s = typeof n == "function", o, t, l = 0, u = i.length; l < u; l++) r = i[l], o = r.property, t = r.value, s ? n(o, t, r) : t && (e || (e = {}), e[o] = t);
    return e
}
var f = p,
    d = p;
f.default = d;
export default f;