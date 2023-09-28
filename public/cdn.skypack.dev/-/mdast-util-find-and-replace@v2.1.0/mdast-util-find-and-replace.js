import b from "../escape-string-regexp@v5.0.0/escape-string-regexp.js";
import {
    visitParents as E
} from "../unist-util-visit-parents@v4.1.1/unist-util-visit-parents.js";
import {
    convert as P
} from "../unist-util-is@v5.1.1-F/unist-util-is.js";
const R = {}.hasOwnProperty,
    O = function(e, r, t, v) {
        let f, c;
        typeof r == "string" || r instanceof RegExp ? (c = [
            [r, t]
        ], f = v) : (c = r, f = t), f || (f = {});
        const w = P(f.ignore || []),
            x = z(c);
        let g = -1;
        for (; ++g < x.length;) E(e, "text", A);
        return e;

        function A(i, d) {
            let o = -1,
                l;
            for (; ++o < d.length;) {
                const n = d[o];
                if (w(n, l ? l.children.indexOf(n) : void 0, l)) return;
                l = n
            }
            if (l) return j(i, l)
        }

        function j(i, d) {
            const o = x[g][0],
                l = x[g][1];
            let n = 0,
                h = d.children.indexOf(i),
                u = [],
                a;
            o.lastIndex = 0;
            let p = o.exec(i.value);
            for (; p;) {
                a = p.index;
                let s = l(...p, {
                    index: p.index,
                    input: p.input
                });
                if (typeof s == "string" && (s = s.length > 0 ? {
                        type: "text",
                        value: s
                    } : void 0), s !== !1 && (n !== a && u.push({
                        type: "text",
                        value: i.value.slice(n, a)
                    }), Array.isArray(s) ? u.push(...s) : s && u.push(s), n = a + p[0].length), !o.global) break;
                p = o.exec(i.value)
            }
            return a === void 0 ? (u = [i], h--) : (n < i.value.length && u.push({
                type: "text",
                value: i.value.slice(n)
            }), d.children.splice(h, 1, ...u)), h + u.length + 1
        }
    };

function z(e) {
    const r = [];
    if (typeof e != "object") throw new TypeError("Expected array or object as schema");
    if (Array.isArray(e)) {
        let t = -1;
        for (; ++t < e.length;) r.push([y(e[t][0]), m(e[t][1])])
    } else {
        let t;
        for (t in e) R.call(e, t) && r.push([y(t), m(e[t])])
    }
    return r
}

function y(e) {
    return typeof e == "string" ? new RegExp(b(e), "g") : e
}

function m(e) {
    return typeof e == "function" ? e : () => e
}
export {
    O as findAndReplace
};
export default null;