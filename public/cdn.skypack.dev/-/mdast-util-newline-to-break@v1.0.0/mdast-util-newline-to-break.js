import {
    findAndReplace as n
} from "../mdast-util-find-and-replace@v2.2.2/mdast-util-find-and-replace.js";

function t(e) {
    n(e, /\r?\n|\r/g, i)
}

function i() {
    return {
        type: "break"
    }
}
export {
    t as newlineToBreak
};
export default null;