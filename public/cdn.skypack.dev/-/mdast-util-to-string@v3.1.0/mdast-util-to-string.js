function a(r, t) {
    var {
        includeImageAlt: i = !0
    } = t || {};
    return l(r, i)
}

function l(r, t) {
    return r && typeof r == "object" && (r.value || (t ? r.alt : "") || "children" in r && u(r.children, t) || Array.isArray(r) && u(r, t)) || ""
}

function u(r, t) {
    for (var i = [], n = -1; ++n < r.length;) i[n] = l(r[n], t);
    return i.join("")
}
export {
    a as toString
};
export default null;