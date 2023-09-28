import {
    splice as f
} from "../micromark-util-chunked@v1.0.0/micromark-util-chunked.js";
const s = {}.hasOwnProperty;

function u(t) {
    const e = {};
    let n = -1;
    for (; ++n < t.length;) d(e, t[n]);
    return e
}

function d(t, e) {
    let n;
    for (n in e) {
        const r = s.call(t, n) ? t[n] : void 0,
            c = r || (t[n] = {}),
            i = e[n];
        let o;
        for (o in i) {
            s.call(c, o) || (c[o] = []);
            const l = i[o];
            h(c[o], Array.isArray(l) ? l : l ? [l] : [])
        }
    }
}

function h(t, e) {
    let n = -1;
    const r = [];
    for (; ++n < e.length;)(e[n].add === "after" ? t : r).push(e[n]);
    f(t, 0, 0, r)
}

function m(t) {
    const e = {};
    let n = -1;
    for (; ++n < t.length;) a(e, t[n]);
    return e
}

function a(t, e) {
    let n;
    for (n in e) {
        const r = s.call(t, n) ? t[n] : void 0,
            c = r || (t[n] = {}),
            i = e[n];
        let o;
        if (i)
            for (o in i) c[o] = i[o]
    }
}
export {
    u as combineExtensions, m as combineHtmlExtensions
};
export default null;