function f(e) {
    const i = [],
        t = String(e || "");
    let n = t.indexOf(","),
        r = 0,
        o = !1;
    for (; !o;) {
        n === -1 && (n = t.length, o = !0);
        const s = t.slice(r, n).trim();
        (s || !o) && i.push(s), r = n + 1, n = t.indexOf(",", r)
    }
    return i
}

function l(e, i) {
    const t = i || {},
        n = e[e.length - 1] === "" ? [...e, ""] : e;
    return n.join((t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")).trim()
}
export {
    f as parse, l as stringify
};
export default null;