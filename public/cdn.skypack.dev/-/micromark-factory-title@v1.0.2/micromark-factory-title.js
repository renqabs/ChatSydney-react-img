import {
    factorySpace as h
} from "../micromark-factory-space@v1.0.0/micromark-factory-space.js";
import {
    markdownLineEnding as x
} from "../micromark-util-character@v1.1.0/micromark-util-character.js";

function E(r, e, p, m, t, l) {
    let i;
    return k;

    function k(n) {
        return r.enter(m), r.enter(t), r.consume(n), r.exit(t), i = n === 40 ? 41 : n, o
    }

    function o(n) {
        return n === i ? (r.enter(t), r.consume(n), r.exit(t), r.exit(m), e) : (r.enter(l), a(n))
    }

    function a(n) {
        return n === i ? (r.exit(l), o(i)) : n === null ? p(n) : x(n) ? (r.enter("lineEnding"), r.consume(n), r.exit("lineEnding"), h(r, a, "linePrefix")) : (r.enter("chunkString", {
            contentType: "string"
        }), u(n))
    }

    function u(n) {
        return n === i || n === null || x(n) ? (r.exit("chunkString"), a(n)) : (r.consume(n), n === 92 ? g : u)
    }

    function g(n) {
        return n === i || n === 92 ? (r.consume(n), u) : u(n)
    }
}
export {
    E as factoryTitle
};
export default null;