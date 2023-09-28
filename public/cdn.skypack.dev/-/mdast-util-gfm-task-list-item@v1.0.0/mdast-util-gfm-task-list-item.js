import {
    listItem as l
} from "../mdast-util-to-markdown@v1.2.6/lib/handle/list-item.js";
const o = {
        exit: {
            taskListCheckValueChecked: r,
            taskListCheckValueUnchecked: r,
            paragraph: p
        }
    },
    k = {
        unsafe: [{
            atBreak: !0,
            character: "-",
            after: "[:|-]"
        }],
        handlers: {
            listItem: d
        }
    };

function r(e) {
    this.stack[this.stack.length - 2].checked = e.type === "taskListCheckValueChecked"
}

function p(e) {
    const s = this.stack[this.stack.length - 2],
        i = this.stack[this.stack.length - 1],
        a = s.children,
        t = i.children[0];
    let n = -1,
        c;
    if (s && s.type === "listItem" && typeof s.checked == "boolean" && t && t.type === "text") {
        for (; ++n < a.length;) {
            const h = a[n];
            if (h.type === "paragraph") {
                c = h;
                break
            }
        }
        c === i && (t.value = t.value.slice(1), t.value.length === 0 ? i.children.shift() : (t.position.start.column++, t.position.start.offset++, i.position.start = Object.assign({}, t.position.start)))
    }
    this.exit(e)
}

function d(e, s, i) {
    const a = e.children[0];
    let t = l(e, s, i);
    return typeof e.checked == "boolean" && a && a.type === "paragraph" && (t = t.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, n)), t;

    function n(c) {
        return c + "[" + (e.checked ? "x" : " ") + "] "
    }
}
export {
    o as gfmTaskListItemFromMarkdown, k as gfmTaskListItemToMarkdown
};
export default null;