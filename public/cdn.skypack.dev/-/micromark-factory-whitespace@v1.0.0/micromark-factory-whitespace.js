import {
    factorySpace as m
} from "../micromark-factory-space@v1.0.0/micromark-factory-space.js";
import {
    markdownLineEnding as a,
    markdownSpace as o
} from "../micromark-util-character@v1.0.0/micromark-util-character.js";

function c(i, e) {
    let n;
    return t;

    function t(r) {
        return a(r) ? (i.enter("lineEnding"), i.consume(r), i.exit("lineEnding"), n = !0, t) : o(r) ? m(i, t, n ? "linePrefix" : "lineSuffix")(r) : e(r)
    }
}
export {
    c as factoryWhitespace
};
export default null;