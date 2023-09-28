import {
    visitParents as p
} from "../unist-util-visit-parents@v5.1.3/unist-util-visit-parents.js";
export {
    CONTINUE,
    EXIT,
    SKIP
}
from "../unist-util-visit-parents@v5.1.3/unist-util-visit-parents.js";
const r = function(e, i, t, o) {
    typeof i == "function" && typeof t != "function" && (o = t, t = i, i = null), p(e, i, l, o);

    function l(s, u) {
        const n = u[u.length - 1];
        return t(s, n ? n.children.indexOf(s) : null, n)
    }
};
export {
    r as visit
};
export default null;