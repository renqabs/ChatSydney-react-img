import {
    toHast as m
} from "../mdast-util-to-hast@v12.1.1/mdast-util-to-hast.js";
export {
    all,
    defaultHandlers,
    one
}
from "../mdast-util-to-hast@v12.1.1/mdast-util-to-hast.js";
const u = function(t, e) {
    return t && "run" in t ? a(t, e) : i(t || e)
};

function a(t, e) {
    return (r, n, o) => {
        t.run(m(r, e), n, s => {
            o(s)
        })
    }
}

function i(t) {
    return e => m(e, t)
}
export default u;