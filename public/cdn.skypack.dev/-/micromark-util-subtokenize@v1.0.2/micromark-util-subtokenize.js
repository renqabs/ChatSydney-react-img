import {
    splice as w
} from "../micromark-util-chunked@v1.0.0/micromark-util-chunked.js";

function x(l) {
    const p = {};
    let e = -1,
        u, r, n, o, f, s, c;
    for (; ++e < l.length;) {
        for (; e in p;) e = p[e];
        if (u = l[e], e && u[1].type === "chunkFlow" && l[e - 1][1].type === "listItemPrefix" && (s = u[1]._tokenizer.events, n = 0, n < s.length && s[n][1].type === "lineEndingBlank" && (n += 2), n < s.length && s[n][1].type === "content"))
            for (; ++n < s.length && !(s[n][1].type === "content");) s[n][1].type === "chunkText" && (s[n][1]._isInFirstContentOfListItem = !0, n++);
        if (u[0] === "enter") u[1].contentType && (Object.assign(p, _(l, e)), e = p[e], c = !0);
        else if (u[1]._container) {
            for (n = e, r = void 0; n-- && (o = l[n], o[1].type === "lineEnding" || o[1].type === "lineEndingBlank");) o[0] === "enter" && (r && (l[r][1].type = "lineEndingBlank"), o[1].type = "lineEnding", r = n);
            r && (u[1].end = Object.assign({}, l[r][1].start), f = l.slice(r, e), f.unshift(u), w(l, r, e - r + 1, f))
        }
    }
    return !c
}

function _(l, p) {
    const e = l[p][1],
        u = l[p][2];
    let r = p - 1;
    const n = [],
        o = e._tokenizer || u.parser[e.contentType](e.start),
        f = o.events,
        s = [],
        c = {};
    let a, g, i = -1,
        t = e,
        h = 0,
        k = 0;
    const d = [k];
    for (; t;) {
        for (; l[++r][1] !== t;);
        n.push(r), t._tokenizer || (a = u.sliceStream(t), t.next || a.push(null), g && o.defineSkip(t.start), t._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(a), t._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), g = t, t = t.next
    }
    for (t = e; ++i < f.length;) f[i][0] === "exit" && f[i - 1][0] === "enter" && f[i][1].type === f[i - 1][1].type && f[i][1].start.line !== f[i][1].end.line && (k = i + 1, d.push(k), t._tokenizer = void 0, t.previous = void 0, t = t.next);
    for (o.events = [], t ? (t._tokenizer = void 0, t.previous = void 0) : d.pop(), i = d.length; i--;) {
        const y = f.slice(d[i], d[i + 1]),
            m = n.pop();
        s.unshift([m, m + y.length - 1]), w(l, m, 2, y)
    }
    for (i = -1; ++i < s.length;) c[h + s[i][0]] = h + s[i][1], h += s[i][1] - s[i][0] - 1;
    return c
}
export {
    x as subtokenize
};
export default null;