import {
    gfmAutolinkLiteralFromMarkdown as m,
    gfmAutolinkLiteralToMarkdown as o
} from "../mdast-util-gfm-autolink-literal@v1.0.2/mdast-util-gfm-autolink-literal.js";
import {
    gfmFootnoteFromMarkdown as i,
    gfmFootnoteToMarkdown as r
} from "../mdast-util-gfm-footnote@v1.0.0/mdast-util-gfm-footnote.js";
import {
    gfmStrikethroughFromMarkdown as e,
    gfmStrikethroughToMarkdown as s
} from "../mdast-util-gfm-strikethrough@v1.0.0/mdast-util-gfm-strikethrough.js";
import {
    gfmTableFromMarkdown as a,
    gfmTableToMarkdown as d
} from "../mdast-util-gfm-table@v1.0.1/mdast-util-gfm-table.js";
import {
    gfmTaskListItemFromMarkdown as f,
    gfmTaskListItemToMarkdown as n
} from "../mdast-util-gfm-task-list-item@v1.0.0/mdast-util-gfm-task-list-item.js";

function l() {
    return [m, i(), e, a, f]
}

function g(t) {
    return {
        extensions: [o, r(), s, d(t), n]
    }
}
export {
    l as gfmFromMarkdown, g as gfmToMarkdown
};
export default null;