var t = {}.hasOwnProperty;

function c(n) {
    return !n || typeof n != "object" ? "" : t.call(n, "position") || t.call(n, "type") ? i(n.position) : t.call(n, "start") || t.call(n, "end") ? i(n) : t.call(n, "line") || t.call(n, "column") ? r(n) : ""
}

function r(n) {
    return o(n && n.line) + ":" + o(n && n.column)
}

function i(n) {
    return r(n && n.start) + "-" + r(n && n.end)
}

function o(n) {
    return n && typeof n == "number" ? n : 1
}
export {
    c as stringifyPosition
};
export default null;