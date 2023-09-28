const r = /\r?\n|\r/g;
export function indentLines(n, c) {
    const t = [];
    let i = 0,
        l = 0,
        e;
    for (; e = r.exec(n);) o(n.slice(i, e.index)), t.push(e[0]), i = e.index + e[0].length, l++;
    return o(n.slice(i)), t.join("");

    function o(s) {
        t.push(c(s, l, !s))
    }
}
export default null;