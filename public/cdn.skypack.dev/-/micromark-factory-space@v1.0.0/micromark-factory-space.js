import {
    markdownSpace as u
} from "../micromark-util-character@v1.0.0/micromark-util-character.js";

function l(t, i, n, e) {
    const a = e ? e - 1 : Number.POSITIVE_INFINITY;
    let o = 0;
    return c;

    function c(r) {
        return u(r) ? (t.enter(n), m(r)) : i(r)
    }

    function m(r) {
        return u(r) && o++ < a ? (t.consume(r), m) : (t.exit(n), i(r))
    }
}
export {
    l as factorySpace
};
export default null;