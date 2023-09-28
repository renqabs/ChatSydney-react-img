function x() {
    const i = [],
        u = {
            run: c,
            use: h
        };
    return u;

    function c(...n) {
        let s = -1;
        const t = n.pop();
        if (typeof t != "function") throw new TypeError("Expected function as last argument, not " + t);
        o(null, ...n);

        function o(e, ...f) {
            const r = i[++s];
            let l = -1;
            if (e) {
                t(e);
                return
            }
            for (; ++l < n.length;)(f[l] === null || f[l] === void 0) && (f[l] = n[l]);
            n = f, r ? p(r, o)(...f) : t(null, ...f)
        }
    }

    function h(n) {
        if (typeof n != "function") throw new TypeError("Expected `middelware` to be a function, not " + n);
        return i.push(n), u
    }
}

function p(i, u) {
    let c;
    return h;

    function h(...t) {
        const o = i.length > t.length;
        let e;
        o && t.push(n);
        try {
            e = i.apply(this, t)
        } catch (f) {
            const r = f;
            if (o && c) throw r;
            return n(r)
        }
        o || (e instanceof Promise ? e.then(s, n) : e instanceof Error ? n(e) : s(e))
    }

    function n(t, ...o) {
        c || (c = !0, u(t, ...o))
    }

    function s(t) {
        n(null, t)
    }
}
export {
    x as trough, p as wrap
};
export default null;