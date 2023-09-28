import {
    markdownLineEnding as x,
    markdownSpace as S
} from "../micromark-util-character@v1.1.0/micromark-util-character.js";

function b(r, h, g, m, t, o) {
    const p = this;
    let i = 0,
        a;
    return E;

    function E(n) {
        return r.enter(m), r.enter(t), r.consume(n), r.exit(t), r.enter(o), l
    }

    function l(n) {
        return n === null || n === 91 || n === 93 && !a || n === 94 && !i && "_hiddenFootnoteSupport" in p.parser.constructs || i > 999 ? g(n) : n === 93 ? (r.exit(o), r.enter(t), r.consume(n), r.exit(t), r.exit(m), h) : x(n) ? (r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), l) : (r.enter("chunkString", {
            contentType: "string"
        }), u(n))
    }

    function u(n) {
        return n === null || n === 91 || n === 93 || x(n) || i++ > 999 ? (r.exit("chunkString"), l(n)) : (r.consume(n), a = a || !S(n), n === 92 ? k : u)
    }

    function k(n) {
        return n === 91 || n === 92 || n === 93 ? (r.consume(n), i++, u) : u(n)
    }
}
export {
    b as factoryLabel
};
export default null;