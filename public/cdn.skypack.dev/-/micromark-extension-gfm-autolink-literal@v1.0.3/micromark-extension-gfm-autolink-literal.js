import {
    asciiAlphanumeric as b,
    asciiAlpha as W,
    asciiDigit as B,
    markdownLineEndingOrSpace as C,
    asciiControl as H,
    unicodeWhitespace as I,
    unicodePunctuation as P,
    markdownLineEnding as F
} from "../micromark-util-character@v1.1.0/micromark-util-character.js";
import {
    sanitizeUri as K
} from "../micromark-util-sanitize-uri@v1.0.0/micromark-util-sanitize-uri.js";
const N = {
        tokenize: J,
        partial: !0
    },
    U = {
        tokenize: M,
        partial: !0
    },
    D = {
        tokenize: X,
        partial: !0
    },
    f = {
        tokenize: Z,
        partial: !0
    },
    S = {
        tokenize: Y,
        partial: !0
    },
    O = {
        tokenize: q,
        previous: R
    },
    _ = {
        tokenize: G,
        previous: L
    },
    p = {
        tokenize: T,
        previous: V
    },
    h = {},
    Q = {
        text: h
    };
let k = 48;
for (; k < 123;) h[k] = p, k++, k === 58 ? k = 65 : k === 91 && (k = 97);
h[43] = p, h[45] = p, h[46] = p, h[95] = p, h[72] = [p, _], h[104] = [p, _], h[87] = [p, O], h[119] = [p, O];

function T(n, m, i) {
    const a = this;
    let o, e;
    return u;

    function u(l) {
        return !y(l) || !V(a.previous) || v(a.events) ? i(l) : (n.enter("literalAutolink"), n.enter("literalAutolinkEmail"), s(l))
    }

    function s(l) {
        return y(l) ? (n.consume(l), s) : l === 64 ? (n.consume(l), t) : i(l)
    }

    function t(l) {
        return l === 46 ? n.check(f, w, A)(l) : l === 45 || l === 95 ? n.check(f, i, z)(l) : b(l) ? (!e && B(l) && (e = !0), n.consume(l), t) : w(l)
    }

    function A(l) {
        return n.consume(l), o = !0, e = void 0, t
    }

    function z(l) {
        return n.consume(l), g
    }

    function g(l) {
        return l === 46 ? n.check(f, i, A)(l) : t(l)
    }

    function w(l) {
        return o && !e ? (n.exit("literalAutolinkEmail"), n.exit("literalAutolink"), m(l)) : i(l)
    }
}

function q(n, m, i) {
    const a = this;
    return o;

    function o(u) {
        return u !== 87 && u !== 119 || !R(a.previous) || v(a.events) ? i(u) : (n.enter("literalAutolink"), n.enter("literalAutolinkWww"), n.check(N, n.attempt(U, n.attempt(D, e), i), i)(u))
    }

    function e(u) {
        return n.exit("literalAutolinkWww"), n.exit("literalAutolink"), m(u)
    }
}

function G(n, m, i) {
    const a = this;
    return o;

    function o(r) {
        return r !== 72 && r !== 104 || !L(a.previous) || v(a.events) ? i(r) : (n.enter("literalAutolink"), n.enter("literalAutolinkHttp"), n.consume(r), e)
    }

    function e(r) {
        return r === 84 || r === 116 ? (n.consume(r), u) : i(r)
    }

    function u(r) {
        return r === 84 || r === 116 ? (n.consume(r), s) : i(r)
    }

    function s(r) {
        return r === 80 || r === 112 ? (n.consume(r), t) : i(r)
    }

    function t(r) {
        return r === 83 || r === 115 ? (n.consume(r), A) : A(r)
    }

    function A(r) {
        return r === 58 ? (n.consume(r), z) : i(r)
    }

    function z(r) {
        return r === 47 ? (n.consume(r), g) : i(r)
    }

    function g(r) {
        return r === 47 ? (n.consume(r), w) : i(r)
    }

    function w(r) {
        return r === null || H(r) || I(r) || P(r) ? i(r) : n.attempt(U, n.attempt(D, l), i)(r)
    }

    function l(r) {
        return n.exit("literalAutolinkHttp"), n.exit("literalAutolink"), m(r)
    }
}

function J(n, m, i) {
    return a;

    function a(t) {
        return n.consume(t), o
    }

    function o(t) {
        return t === 87 || t === 119 ? (n.consume(t), e) : i(t)
    }

    function e(t) {
        return t === 87 || t === 119 ? (n.consume(t), u) : i(t)
    }

    function u(t) {
        return t === 46 ? (n.consume(t), s) : i(t)
    }

    function s(t) {
        return t === null || F(t) ? i(t) : m(t)
    }
}

function M(n, m, i) {
    let a, o;
    return e;

    function e(t) {
        return t === 38 ? n.check(S, s, u)(t) : t === 46 || t === 95 ? n.check(f, s, u)(t) : t === null || H(t) || I(t) || t !== 45 && P(t) ? s(t) : (n.consume(t), e)
    }

    function u(t) {
        return t === 46 ? (o = a, a = void 0, n.consume(t), e) : (t === 95 && (a = !0), n.consume(t), e)
    }

    function s(t) {
        return !o && !a ? m(t) : i(t)
    }
}

function X(n, m) {
    let i = 0;
    return a;

    function a(u) {
        return u === 38 ? n.check(S, m, o)(u) : (u === 40 && i++, u === 41 ? n.check(f, e, o)(u) : x(u) ? m(u) : j(u) ? n.check(f, m, o)(u) : (n.consume(u), a))
    }

    function o(u) {
        return n.consume(u), a
    }

    function e(u) {
        return i--, i < 0 ? m(u) : o(u)
    }
}

function Y(n, m, i) {
    return a;

    function a(u) {
        return n.consume(u), o
    }

    function o(u) {
        return W(u) ? (n.consume(u), o) : u === 59 ? (n.consume(u), e) : i(u)
    }

    function e(u) {
        return x(u) ? m(u) : i(u)
    }
}

function Z(n, m, i) {
    return a;

    function a(e) {
        return n.consume(e), o
    }

    function o(e) {
        return j(e) ? (n.consume(e), o) : x(e) ? m(e) : i(e)
    }
}

function j(n) {
    return n === 33 || n === 34 || n === 39 || n === 41 || n === 42 || n === 44 || n === 46 || n === 58 || n === 59 || n === 60 || n === 63 || n === 95 || n === 126
}

function x(n) {
    return n === null || n === 60 || C(n)
}

function y(n) {
    return n === 43 || n === 45 || n === 46 || n === 95 || b(n)
}

function R(n) {
    return n === null || n === 40 || n === 42 || n === 95 || n === 126 || C(n)
}

function L(n) {
    return n === null || !W(n)
}

function V(n) {
    return n !== 47 && L(n)
}

function v(n) {
    let m = n.length,
        i = !1;
    for (; m--;) {
        const a = n[m][1];
        if ((a.type === "labelLink" || a.type === "labelImage") && !a._balanced) {
            i = !0;
            break
        }
        if (a._gfmAutolinkLiteralWalkedInto) {
            i = !1;
            break
        }
    }
    return n.length > 0 && !i && (n[n.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), i
}
const $ = {
    exit: {
        literalAutolinkEmail: d,
        literalAutolinkHttp: nn,
        literalAutolinkWww: c
    }
};

function c(n) {
    E.call(this, n, "http://")
}

function d(n) {
    E.call(this, n, "mailto:")
}

function nn(n) {
    E.call(this, n)
}

function E(n, m) {
    const i = this.sliceSerialize(n);
    this.tag('<a href="' + K((m || "") + i) + '">'), this.raw(this.encode(i)), this.tag("</a>")
}
export {
    Q as gfmAutolinkLiteral, $ as gfmAutolinkLiteralHtml
};
export default null;