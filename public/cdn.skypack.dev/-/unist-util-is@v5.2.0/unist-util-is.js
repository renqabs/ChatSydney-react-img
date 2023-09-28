const l = function n(e, t, r, o, u) {
        const c = f(t);
        if (r != null && (typeof r != "number" || r < 0 || r === Number.POSITIVE_INFINITY)) throw new Error("Expected positive finite index");
        if (o != null && (!n(o) || !o.children)) throw new Error("Expected parent node");
        if (o == null !== (r == null)) throw new Error("Expected both parent and index");
        return e && e.type && typeof e.type == "string" ? Boolean(c.call(u, e, r, o)) : !1
    },
    f = function(n) {
        if (n == null) return h;
        if (typeof n == "string") return p(n);
        if (typeof n == "object") return Array.isArray(n) ? y(n) : a(n);
        if (typeof n == "function") return i(n);
        throw new Error("Expected function, string, or object as test")
    };

function y(n) {
    const e = [];
    let t = -1;
    for (; ++t < n.length;) e[t] = f(n[t]);
    return i(r);

    function r(...o) {
        let u = -1;
        for (; ++u < e.length;)
            if (e[u].call(this, ...o)) return !0;
        return !1
    }
}

function a(n) {
    return i(e);

    function e(t) {
        let r;
        for (r in n)
            if (t[r] !== n[r]) return !1;
        return !0
    }
}

function p(n) {
    return i(e);

    function e(t) {
        return t && t.type === n
    }
}

function i(n) {
    return e;

    function e(t, ...r) {
        return Boolean(t && typeof t == "object" && "type" in t && Boolean(n.call(this, t, ...r)))
    }
}

function h() {
    return !0
}
export {
    f as convert, l as is
};
export default null;