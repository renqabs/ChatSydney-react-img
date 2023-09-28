import {
    asciiAlphanumeric as m
} from "../micromark-util-character@v1.0.0/micromark-util-character.js";
import {
    encode as d
} from "../micromark-util-encode@v1.0.0/micromark-util-encode.js";

function f(r, s) {
    const e = d(a(r || ""));
    if (!s) return e;
    const o = e.indexOf(":"),
        n = e.indexOf("?"),
        i = e.indexOf("#"),
        t = e.indexOf("/");
    return o < 0 || t > -1 && o > t || n > -1 && o > n || i > -1 && o > i || s.test(e.slice(0, o)) ? e : ""
}

function a(r) {
    const s = [];
    let e = -1,
        o = 0,
        n = 0;
    for (; ++e < r.length;) {
        const i = r.charCodeAt(e);
        let t = "";
        if (i === 37 && m(r.charCodeAt(e + 1)) && m(r.charCodeAt(e + 2))) n = 2;
        else if (i < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (t = String.fromCharCode(i));
        else if (i > 55295 && i < 57344) {
            const c = r.charCodeAt(e + 1);
            i < 56320 && c > 56319 && c < 57344 ? (t = String.fromCharCode(i, c), n = 1) : t = "\uFFFD"
        } else t = String.fromCharCode(i);
        t && (s.push(r.slice(o, e), encodeURIComponent(t)), o = e + n + 1, t = ""), n && (e += n, n = 0)
    }
    return s.join("") + r.slice(o)
}
export {
    f as sanitizeUri
};
export default null;