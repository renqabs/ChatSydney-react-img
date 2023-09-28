import {
    asciiControl as I,
    markdownLineEnding as G,
    markdownLineEndingOrSpace as L
} from "../micromark-util-character@v1.0.0/micromark-util-character.js";

function O(i, l, t, u, S, a, E, m, b) {
    const N = b || Number.POSITIVE_INFINITY;
    let h = 0;
    return v;

    function v(n) {
        return n === 60 ? (i.enter(u), i.enter(S), i.enter(a), i.consume(n), i.exit(a), g) : n === null || n === 41 || I(n) ? t(n) : (i.enter(u), i.enter(E), i.enter(m), i.enter("chunkString", {
            contentType: "string"
        }), r(n))
    }

    function g(n) {
        return n === 62 ? (i.enter(a), i.consume(n), i.exit(a), i.exit(S), i.exit(u), l) : (i.enter(m), i.enter("chunkString", {
            contentType: "string"
        }), x(n))
    }

    function x(n) {
        return n === 62 ? (i.exit("chunkString"), i.exit(m), g(n)) : n === null || n === 60 || G(n) ? t(n) : (i.consume(n), n === 92 ? w : x)
    }

    function w(n) {
        return n === 60 || n === 62 || n === 92 ? (i.consume(n), x) : x(n)
    }

    function r(n) {
        return n === 40 ? ++h > N ? t(n) : (i.consume(n), r) : n === 41 ? h-- ? (i.consume(n), r) : (i.exit("chunkString"), i.exit(m), i.exit(E), i.exit(u), l(n)) : n === null || L(n) ? h ? t(n) : (i.exit("chunkString"), i.exit(m), i.exit(E), i.exit(u), l(n)) : I(n) ? t(n) : (i.consume(n), n === 92 ? B : r)
    }

    function B(n) {
        return n === 40 || n === 41 || n === 92 ? (i.consume(n), r) : r(n)
    }
}
export {
    O as factoryDestination
};
export default null;