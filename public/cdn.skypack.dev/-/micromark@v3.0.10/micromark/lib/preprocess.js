const d = /[\0\t\n\r]/g;

function x() {
    let i = 1,
        c = "",
        f = !0,
        r;
    return l;

    function l(n, p, a) {
        const e = [];
        let h, o, t, s, u;
        for (n = c + n.toString(p), t = 0, c = "", f && (n.charCodeAt(0) === 65279 && t++, f = void 0); t < n.length;) {
            if (d.lastIndex = t, h = d.exec(n), s = h && h.index !== void 0 ? h.index : n.length, u = n.charCodeAt(s), !h) {
                c = n.slice(t);
                break
            }
            if (u === 10 && t === s && r) e.push(-3), r = void 0;
            else {
                r && (e.push(-5), r = void 0), t < s && (e.push(n.slice(t, s)), i += s - t);
                switch (u) {
                    case 0:
                        {
                            e.push(65533),
                            i++;
                            break
                        }
                    case 9:
                        {
                            for (o = Math.ceil(i / 4) * 4, e.push(-2); i++ < o;) e.push(-1);
                            break
                        }
                    case 10:
                        {
                            e.push(-4),
                            i = 1;
                            break
                        }
                    default:
                        r = !0, i = 1
                }
            }
            t = s + 1
        }
        return a && (r && e.push(-5), c && e.push(c), e.push(null)), e
    }
}
export {
    x as preprocess
};
export default null;