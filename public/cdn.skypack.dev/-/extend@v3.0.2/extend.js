var u = Object.prototype.hasOwnProperty,
    s = Object.prototype.toString,
    y = Object.defineProperty,
    p = Object.getOwnPropertyDescriptor,
    v = function(r) {
        return typeof Array.isArray == "function" ? Array.isArray(r) : s.call(r) === "[object Array]"
    },
    O = function(r) {
        if (!r || s.call(r) !== "[object Object]") return !1;
        var e = u.call(r, "constructor"),
            a = r.constructor && r.constructor.prototype && u.call(r.constructor.prototype, "isPrototypeOf");
        if (r.constructor && !e && !a) return !1;
        var t;
        for (t in r);
        return typeof t == "undefined" || u.call(r, t)
    },
    P = function(r, e) {
        y && e.name === "__proto__" ? y(r, e.name, {
            enumerable: !0,
            configurable: !0,
            value: e.newValue,
            writable: !0
        }) : r[e.name] = e.newValue
    },
    g = function(r, e) {
        if (e === "__proto__")
            if (u.call(r, e)) {
                if (p) return p(r, e).value
            } else return;
        return r[e]
    },
    w = function o() {
        var r, e, a, t, c, l, n = arguments[0],
            f = 1,
            d = arguments.length,
            i = !1;
        for (typeof n == "boolean" && (i = n, n = arguments[1] || {}, f = 2), (n == null || typeof n != "object" && typeof n != "function") && (n = {}); f < d; ++f)
            if (r = arguments[f], r != null)
                for (e in r) a = g(n, e), t = g(r, e), n !== t && (i && t && (O(t) || (c = v(t))) ? (c ? (c = !1, l = a && v(a) ? a : []) : l = a && O(a) ? a : {}, P(n, {
                    name: e,
                    newValue: o(i, l, t)
                })) : typeof t != "undefined" && P(n, {
                    name: e,
                    newValue: t
                }));
        return n
    };
export default w;