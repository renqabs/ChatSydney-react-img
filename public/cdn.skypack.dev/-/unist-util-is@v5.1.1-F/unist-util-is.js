const l = function n(r, t, e, o, u) {
        const c = f(t);
        if (e != null && (typeof e != "number" || e < 0 || e === Number.POSITIVE_INFINITY)) throw new Error("Expected positive finite index");
        if (o != null && (!n(o) || !o.children)) throw new Error("Expected parent node");
        if (o == null !== (e == null)) throw new Error("Expected both parent and index");
        return r && r.type && typeof r.type == "string" ? Boolean(c.call(u, r, e, o)) : !1
    },
    f = function(n) {
        if (n == null) return h;
        if (typeof n == "string") return p(n);
        if (typeof n == "object") return Array.isArray(n) ? y(n) : a(n);
        if (typeof n == "function") return i(n);
        throw new Error("Expected function, string, or object as test")
    };

function y(n) {
    const r = [];
    let t = -1;
    for (; ++t < n.length;) r[t] = f(n[t]);
    return i(e);

    function e(...o) {
        let u = -1;
        for (; ++u < r.length;)
            if (r[u].call(this, ...o)) return !0;
        return !1
    }
}

function a(n) {
    return i(r);

    function r(t) {
        let e;
        for (e in n)
            if (t[e] !== n[e]) return !1;
        return !0
    }
}

function p(n) {
    return i(r);

    function r(t) {
        return t && t.type === n
    }
}

function i(n) {
    return r;

    function r(...t) {
        return Boolean(n.call(this, ...t))
    }
}

function h() {
    return !0
}
export {
    f as convert, l as is
};
export default null;