import {
    visit as u
} from "../unist-util-visit@v3.1.0/unist-util-visit.js";
const o = {}.hasOwnProperty;

function l(t) {
    const n = Object.create(null);
    if (!t || !t.type) throw new Error("mdast-util-definitions expected node");
    return u(t, "definition", s), c;

    function s(e) {
        const i = r(e.identifier);
        i && !o.call(n, i) && (n[i] = e)
    }

    function c(e) {
        const i = r(e);
        return i && o.call(n, i) ? n[i] : null
    }
}

function r(t) {
    return String(t || "").toUpperCase()
}
export {
    l as definitions
};
export default null;