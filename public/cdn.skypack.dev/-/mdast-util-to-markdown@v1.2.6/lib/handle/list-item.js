import {
    checkBullet as c
} from "../../lib/util/check-bullet.js";
import {
    checkListItemIndent as p
} from "../../lib/util/check-list-item-indent.js";
import {
    containerFlow as b
} from "../../lib/util/container-flow.js";
import {
    indentLines as h
} from "../../lib/util/indent-lines.js";
export function listItem(r, t, i) {
    const s = p(i);
    let e = i.bulletCurrent || c(i);
    t && t.type === "list" && t.ordered && (e = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (i.options.incrementListMarker === !1 ? 0 : t.children.indexOf(r)) + e);
    let l = e.length + 1;
    (s === "tab" || s === "mixed" && (t && t.type === "list" && t.spread || r.spread)) && (l = Math.ceil(l / 4) * 4);
    const m = i.enter("listItem"),
        o = h(b(r, i), d);
    return m(), o;

    function d(n, f, u) {
        return f ? (u ? "" : " ".repeat(l)) + n : (u ? e : e + " ".repeat(l - e.length)) + n
    }
}
export default null;