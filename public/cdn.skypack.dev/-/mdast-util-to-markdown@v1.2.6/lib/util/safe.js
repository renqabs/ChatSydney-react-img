import {
    patternCompile as x
} from "../../lib/util/pattern-compile.js";
import {
    patternInScope as w
} from "../../lib/util/pattern-in-scope.js";
export function safe(r, c, i) {
    const s = (i.before || "") + (c || "") + (i.after || ""),
        n = [],
        a = [],
        t = {};
    let o = -1;
    for (; ++o < r.unsafe.length;) {
        const e = r.unsafe[o];
        if (!w(r.stack, e)) continue;
        const m = x(e);
        let u;
        for (; u = m.exec(s);) {
            const h = "before" in e || Boolean(e.atBreak),
                d = "after" in e,
                f = u.index + (h ? u[1].length : 0);
            n.includes(f) ? (t[f].before && !h && (t[f].before = !1), t[f].after && !d && (t[f].after = !1)) : (n.push(f), t[f] = {
                before: h,
                after: d
            })
        }
    }
    n.sort(j);
    let l = i.before ? i.before.length : 0;
    const p = s.length - (i.after ? i.after.length : 0);
    for (o = -1; ++o < n.length;) {
        const e = n[o];
        if (e < l || e >= p) continue;
        if (e + 1 < p && n[o + 1] === e + 1 && t[e].after && !t[e + 1].before && !t[e + 1].after || n[o - 1] === e - 1 && t[e].before && !t[e - 1].before && !t[e - 1].after) continue;
        l !== e && a.push(b(s.slice(l, e), "\\")), l = e, /[!-/:-@[-`{-~]/.test(s.charAt(e)) && (!i.encode || !i.encode.includes(s.charAt(e))) ? a.push("\\") : (a.push("&#x" + s.charCodeAt(e).toString(16).toUpperCase() + ";"), l++)
    }
    return a.push(b(s.slice(l, p), i.after)), a.join("")
}

function j(r, c) {
    return r - c
}

function b(r, c) {
    const i = /\\(?=[!-/:-@[-`{-~])/g,
        s = [],
        n = [],
        a = r + c;
    let t = -1,
        o = 0,
        l;
    for (; l = i.exec(a);) s.push(l.index);
    for (; ++t < s.length;) o !== s[t] && n.push(r.slice(o, s[t])), n.push("\\"), o = s[t];
    return n.push(r.slice(o)), n.join("")
}
export default null;