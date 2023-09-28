export function containerPhrasing(a, h, c) {
    const i = h.indexStack,
        t = a.children || [],
        e = [];
    let l = -1,
        r = c.before;
    for (i.push(-1); ++l < t.length;) {
        const f = t[l];
        let d;
        if (i[i.length - 1] = l, l + 1 < t.length) {
            let n = h.handle.handlers[t[l + 1].type];
            n && n.peek && (n = n.peek), d = n ? n(t[l + 1], a, h, {
                before: "",
                after: ""
            }).charAt(0) : ""
        } else d = c.after;
        e.length > 0 && (r === "\r" || r === `
`) && f.type === "html" && (e[e.length - 1] = e[e.length - 1].replace(/(\r?\n|\r)$/, " "), r = " "), e.push(h.handle(f, a, h, {
            before: r,
            after: d
        })), r = e[e.length - 1].slice(-1)
    }
    return i.pop(), e.join("")
}
export default null;