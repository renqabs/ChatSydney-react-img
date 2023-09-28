import {
    markdownLineEndingOrSpace as r,
    unicodeWhitespace as t,
    unicodePunctuation as n
} from "../micromark-util-character@v1.0.0/micromark-util-character.js";

function a(i) {
    if (i === null || r(i) || t(i)) return 1;
    if (n(i)) return 2
}
export {
    a as classifyCharacter
};
export default null;