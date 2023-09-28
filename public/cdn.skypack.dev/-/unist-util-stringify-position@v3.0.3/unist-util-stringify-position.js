function o(n) {
    return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? i(n.position) : "start" in n || "end" in n ? i(n) : "line" in n || "column" in n ? t(n) : ""
}

function t(n) {
    return r(n && n.line) + ":" + r(n && n.column)
}

function i(n) {
    return t(n && n.start) + "-" + t(n && n.end)
}

function r(n) {
    return n && typeof n == "number" ? n : 1
}
export {
    o as stringifyPosition
};
export default null;