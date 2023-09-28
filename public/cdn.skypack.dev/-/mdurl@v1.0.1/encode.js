var C = {};

function F(t) {
    var e, n, o = C[t];
    if (o) return o;
    for (o = C[t] = [], e = 0; e < 128; e++) n = String.fromCharCode(e), /^[0-9a-z]$/i.test(n) ? o.push(n) : o.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
    for (e = 0; e < t.length; e++) o[t.charCodeAt(e)] = t[e];
    return o
}

function a(t, e, n) {
    var o, i, f, c, h, r = "";
    for (typeof e != "string" && (n = e, e = a.defaultChars), typeof n == "undefined" && (n = !0), h = F(e), o = 0, i = t.length; o < i; o++) {
        if (f = t.charCodeAt(o), n && f === 37 && o + 2 < i && /^[0-9a-f]{2}$/i.test(t.slice(o + 1, o + 3))) {
            r += t.slice(o, o + 3), o += 2;
            continue
        }
        if (f < 128) {
            r += h[f];
            continue
        }
        if (f >= 55296 && f <= 57343) {
            if (f >= 55296 && f <= 56319 && o + 1 < i && (c = t.charCodeAt(o + 1), c >= 56320 && c <= 57343)) {
                r += encodeURIComponent(t[o] + t[o + 1]), o++;
                continue
            }
            r += "%EF%BF%BD";
            continue
        }
        r += encodeURIComponent(t[o])
    }
    return r
}
a.defaultChars = ";/?:@&=+$,-_.!~*'()#", a.componentChars = "-_.!~*'()";
var u = a;
export default u;