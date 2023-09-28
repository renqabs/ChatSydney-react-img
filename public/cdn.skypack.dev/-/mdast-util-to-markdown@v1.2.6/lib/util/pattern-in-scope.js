export function patternInScope(e, n) {
    return t(e, n.inConstruct, !0) && !t(e, n.notInConstruct, !1)
}

function t(e, n, u) {
    if (!n) return u;
    typeof n == "string" && (n = [n]);
    let r = -1;
    for (; ++r < n.length;)
        if (e.includes(n[r])) return !0;
    return !1
}
export default null;