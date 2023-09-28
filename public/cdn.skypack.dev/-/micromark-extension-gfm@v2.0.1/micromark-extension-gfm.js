import {
    combineExtensions as t,
    combineHtmlExtensions as i
} from "../micromark-util-combine-extensions@v1.0.0/micromark-util-combine-extensions.js";
import {
    gfmAutolinkLiteral as o,
    gfmAutolinkLiteralHtml as e
} from "../micromark-extension-gfm-autolink-literal@v1.0.3/micromark-extension-gfm-autolink-literal.js";
import {
    gfmFootnote as r,
    gfmFootnoteHtml as n
} from "../micromark-extension-gfm-footnote@v1.0.3/micromark-extension-gfm-footnote.js";
import {
    gfmStrikethrough as s,
    gfmStrikethroughHtml as f
} from "../micromark-extension-gfm-strikethrough@v1.0.4/micromark-extension-gfm-strikethrough.js";
import {
    gfmTable as l,
    gfmTableHtml as a
} from "../micromark-extension-gfm-table@v1.0.5/micromark-extension-gfm-table.js";
import {
    gfmTagfilterHtml as g
} from "../micromark-extension-gfm-tagfilter@v1.0.1/micromark-extension-gfm-tagfilter.js";
import {
    gfmTaskListItem as d,
    gfmTaskListItemHtml as k
} from "../micromark-extension-gfm-task-list-item@v1.0.3/micromark-extension-gfm-task-list-item.js";

function p(m) {
    return t([o, r(), s(m), l, d])
}

function c(m) {
    return i([e, n(m), f, a, g, k])
}
export {
    p as gfm, c as gfmHtml
};
export default null;