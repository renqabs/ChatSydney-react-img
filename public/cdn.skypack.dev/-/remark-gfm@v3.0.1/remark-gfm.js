import {
    gfm as s
} from "../micromark-extension-gfm@v2.0.1/micromark-extension-gfm.js";
import {
    gfmFromMarkdown as a,
    gfmToMarkdown as d
} from "../mdast-util-gfm@v2.0.0/mdast-util-gfm.js";

function e(i = {}) {
    const m = this.data();
    o("micromarkExtensions", s(i)), o("fromMarkdownExtensions", a()), o("toMarkdownExtensions", d(i));

    function o(t, r) {
        const n = m[t] ? m[t] : m[t] = [];
        n.push(r)
    }
}
export default e;