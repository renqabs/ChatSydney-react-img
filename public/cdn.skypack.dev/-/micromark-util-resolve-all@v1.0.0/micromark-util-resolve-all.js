function t(o, e, i) {
    const n = [];
    let r = -1;
    for (; ++r < o.length;) {
        const l = o[r].resolveAll;
        l && !n.includes(l) && (e = l(e, i), n.push(l))
    }
    return e
}
export {
    t as resolveAll
};
export default null;