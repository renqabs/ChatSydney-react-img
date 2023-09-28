import {
    fromMarkdown as n
} from "../mdast-util-from-markdown@v1.2.0/mdast-util-from-markdown.js";

function o(t) {
    const s = r => {
        const i = this.data("settings");
        return n(r, Object.assign({}, i, t, {
            extensions: this.data("micromarkExtensions") || [],
            mdastExtensions: this.data("fromMarkdownExtensions") || []
        }))
    };
    Object.assign(this, {
        Parser: s
    })
}
export default o;