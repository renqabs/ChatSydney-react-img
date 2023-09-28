import {
    T as n,
    g as m
} from "./common/chunk-THGZSONF-450ddc43.js";
export {
    T as Tiktoken, g as getEncodingNameForModel
}
from "./common/chunk-THGZSONF-450ddc43.js";
import {
    c as t
} from "./common/chunk-H4GMFLYA-f4bcf0ce.js";
import {
    g as c
} from "./common/chunk-F7G2FLS4-c1e72d33.js";
import {
    p as s
} from "./common/chunk-EFS4X6KN-15bf5d08.js";
import {
    p as a
} from "./common/chunk-BJSHOR2F-351c7c6d.js";
import {
    r as d
} from "./common/chunk-LWEZBMPN-be9671fd.js";
import "../base64-js@v1.5.1/base64-js.js";

function e(r, o) {
    switch (r) {
        case "gpt2":
            return new n(c, o);
        case "r50k_base":
            return new n(d, o);
        case "p50k_base":
            return new n(s, o);
        case "p50k_edit":
            return new n(a, o);
        case "cl100k_base":
            return new n(t, o);
        default:
            throw new Error("Unknown encoding")
    }
}

function u(r, o) {
    return e(m(r), o)
}
export {
    u as encodingForModel, e as getEncoding
};
export default null;