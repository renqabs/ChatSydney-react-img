import {
    patternCompile as a
} from "../../lib/util/pattern-compile.js";
inlineCode.peek = p;
export function inlineCode(s, c, l) {
    let e = s.value || "",
        t = "`",
        o = -1;
    for (; new RegExp("(^|[^`])" + t + "([^`]|$)").test(e);) t += "`";
    for (/[^ \r\n]/.test(e) && (/^[ \r\n]/.test(e) && /[ \r\n]$/.test(e) || /^`|`$/.test(e)) && (e = " " + e + " "); ++o < l.unsafe.length;) {
        const r = l.unsafe[o],
            u = a(r);
        let i;
        if (!r.atBreak) continue;
        for (; i = u.exec(e);) {
            let n = i.index;
            e.charCodeAt(n) === 10 && e.charCodeAt(n - 1) === 13 && n--, e = e.slice(0, n) + " " + e.slice(i.index + 1)
        }
    }
    return t + e + t
}

function p() {
    return "`"
}
export default null;