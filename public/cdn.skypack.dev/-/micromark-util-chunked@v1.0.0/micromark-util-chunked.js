function c(l, n, p, f) {
    const h = l.length;
    let u = 0,
        e;
    if (n < 0 ? n = -n > h ? 0 : h + n : n = n > h ? h : n, p = p > 0 ? p : 0, f.length < 1e4) e = Array.from(f), e.unshift(n, p), [].splice.apply(l, e);
    else
        for (p && [].splice.apply(l, [n, p]); u < f.length;) e = f.slice(u, u + 1e4), e.unshift(n, 0), [].splice.apply(l, e), u += 1e4, n += 1e4
}

function g(l, n) {
    return l.length > 0 ? (c(l, l.length, 0, n), l) : n
}
export {
    g as push, c as splice
};
export default null;