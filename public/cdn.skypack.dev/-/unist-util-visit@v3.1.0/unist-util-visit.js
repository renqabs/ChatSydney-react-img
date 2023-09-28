import {
    visitParents as p
} from "../unist-util-visit-parents@v4.1.1/unist-util-visit-parents.js";
export {
    CONTINUE,
    EXIT,
    SKIP
}
from "../unist-util-visit-parents@v4.1.1/unist-util-visit-parents.js";
const r = function(s, i, t, e) {
    typeof i == "function" && typeof t != "function" && (e = t, t = i, i = null), p(s, i, l, e);

    function l(o, u) {
        var n = u[u.length - 1];
        return t(o, n ? n.children.indexOf(o) : null, n)
    }
};
export {
    r as visit
};
export default null;