function r(t) {
    const n = String(t || "").trim();
    return n ? n.split(/[ \t\n\r\f]+/g) : []
}

function i(t) {
    return t.join(" ").trim()
}
export {
    r as parse, i as stringify
};
export default null;