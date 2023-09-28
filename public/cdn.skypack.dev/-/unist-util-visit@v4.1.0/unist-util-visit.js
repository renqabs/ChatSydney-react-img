import {
    visitParents as l
} from "../unist-util-visit-parents@v5.1.0/unist-util-visit-parents.js";
export {
    CONTINUE,
    EXIT,
    SKIP
}
from "../unist-util-visit-parents@v5.1.0/unist-util-visit-parents.js";
const p = function(e, i, t, o) {
    typeof i == "function" && typeof t != "function" && (o = t, t = i, i = null), l(e, i, m, o);

    function m(s, u) {
        const n = u[u.length - 1];
        return t(s, n ? n.children.indexOf(s) : null, n)
    }
};
export {
    p as visit
};
export default null;