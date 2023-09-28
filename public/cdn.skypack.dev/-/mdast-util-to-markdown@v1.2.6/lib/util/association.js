import {
    decodeString as e
} from "../../../micromark-util-decode-string@v1.0.2/micromark-util-decode-string.js";
export function association(i) {
    return i.label || !i.identifier ? i.label || "" : e(i.identifier)
}
export default null;