import {
    decodeNamedCharacterReference as a
} from "../decode-named-character-reference@v1.0.0/decode-named-character-reference.js";
import {
    decodeNumericCharacterReference as n
} from "../micromark-util-decode-numeric-character-reference@v1.0.0/micromark-util-decode-numeric-character-reference.js";
const i = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function m(r) {
    return r.replace(i, s)
}

function s(r, c, e) {
    if (c) return c;
    const o = e.charCodeAt(0);
    if (o === 35) {
        const d = e.charCodeAt(1),
            t = d === 120 || d === 88;
        return n(e.slice(t ? 2 : 1), t ? 16 : 10)
    }
    return a(e) || r
}
export {
    m as decodeString
};
export default null;