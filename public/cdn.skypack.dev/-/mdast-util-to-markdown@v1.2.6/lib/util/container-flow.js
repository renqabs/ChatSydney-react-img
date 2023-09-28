export function containerFlow(u, e) {
    const t = e.indexStack,
        r = u.children || [],
        s = [];
    let n = -1;
    for (t.push(-1); ++n < r.length;) {
        const i = r[n];
        t[t.length - 1] = n, s.push(e.handle(i, u, e, {
            before: `
`,
            after: `
`
        })), i.type !== "list" && (e.bulletLastUsed = void 0), n < r.length - 1 && s.push(h(i, r[n + 1]))
    }
    return t.pop(), s.join("");

    function h(i, d) {
        let f = e.join.length;
        for (; f--;) {
            const l = e.join[f](i, d, u, e);
            if (l === !0 || l === 1) break;
            if (typeof l == "number") return `
`.repeat(1 + l);
            if (l === !1) return `

<!---->

`
        }
        return `

`
    }
}
export default null;