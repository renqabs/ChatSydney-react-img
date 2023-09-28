import {
    containerPhrasing as o
} from "../mdast-util-to-markdown@v1.2.6/lib/util/container-phrasing.js";
const h = {
        canContainEols: ["delete"],
        enter: {
            strikethrough: a
        },
        exit: {
            strikethrough: u
        }
    },
    s = {
        unsafe: [{
            character: "~",
            inConstruct: "phrasing"
        }],
        handlers: {
            delete: r
        }
    };
r.peek = l;

function a(e) {
    this.enter({
        type: "delete",
        children: []
    }, e)
}

function u(e) {
    this.exit(e)
}

function r(e, c, t) {
    const n = t.enter("emphasis"),
        i = o(e, t, {
            before: "~",
            after: "~"
        });
    return n(), "~~" + i + "~~"
}

function l() {
    return "~"
}
export {
    h as gfmStrikethroughFromMarkdown, s as gfmStrikethroughToMarkdown
};
export default null;