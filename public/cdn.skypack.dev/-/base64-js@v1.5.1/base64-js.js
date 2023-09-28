for (var A = L, s = B, x = _, f = [], y = [], p = typeof Uint8Array != "undefined" ? Uint8Array : Array, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, C = c.length; d < C; ++d) f[d] = c[d], y[c.charCodeAt(d)] = d;
y["-".charCodeAt(0)] = 62, y["_".charCodeAt(0)] = 63;

function l(r) {
    var e = r.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var a = r.indexOf("=");
    a === -1 && (a = e);
    var o = a === e ? 0 : 4 - a % 4;
    return [a, o]
}

function L(r) {
    var e = l(r),
        a = e[0],
        o = e[1];
    return (a + o) * 3 / 4 - o
}

function g(r, e, a) {
    return (e + a) * 3 / 4 - a
}

function B(r) {
    var e, a = l(r),
        o = a[0],
        n = a[1],
        t = new p(g(r, o, n)),
        v = 0,
        F = n > 0 ? o - 4 : o,
        h;
    for (h = 0; h < F; h += 4) e = y[r.charCodeAt(h)] << 18 | y[r.charCodeAt(h + 1)] << 12 | y[r.charCodeAt(h + 2)] << 6 | y[r.charCodeAt(h + 3)], t[v++] = e >> 16 & 255, t[v++] = e >> 8 & 255, t[v++] = e & 255;
    return n === 2 && (e = y[r.charCodeAt(h)] << 2 | y[r.charCodeAt(h + 1)] >> 4, t[v++] = e & 255), n === 1 && (e = y[r.charCodeAt(h)] << 10 | y[r.charCodeAt(h + 1)] << 4 | y[r.charCodeAt(h + 2)] >> 2, t[v++] = e >> 8 & 255, t[v++] = e & 255), t
}

function i(r) {
    return f[r >> 18 & 63] + f[r >> 12 & 63] + f[r >> 6 & 63] + f[r & 63]
}

function m(r, e, a) {
    for (var o, n = [], t = e; t < a; t += 3) o = (r[t] << 16 & 16711680) + (r[t + 1] << 8 & 65280) + (r[t + 2] & 255), n.push(i(o));
    return n.join("")
}

function _(r) {
    for (var e, a = r.length, o = a % 3, n = [], t = 16383, v = 0, F = a - o; v < F; v += t) n.push(m(r, v, v + t > F ? F : v + t));
    return o === 1 ? (e = r[a - 1], n.push(f[e >> 2] + f[e << 4 & 63] + "==")) : o === 2 && (e = (r[a - 2] << 8) + r[a - 1], n.push(f[e >> 10] + f[e >> 4 & 63] + f[e << 2 & 63] + "=")), n.join("")
}
var u = {
    byteLength: A,
    toByteArray: s,
    fromByteArray: x
};
export default u;
export {
    u as __moduleExports, A as byteLength, x as fromByteArray, s as toByteArray
};