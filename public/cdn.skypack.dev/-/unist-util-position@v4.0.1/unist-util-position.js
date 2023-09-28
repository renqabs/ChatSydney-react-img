var i = l("start"),
    r = l("end");

function e(t) {
    return {
        start: i(t),
        end: r(t)
    }
}

function l(t) {
    return u;

    function u(o) {
        var n = o && o.position && o.position[t] || {};
        return {
            line: n.line || null,
            column: n.column || null,
            offset: n.offset > -1 ? n.offset : null
        }
    }
}
export {
    r as pointEnd, i as pointStart, e as position
};
export default null;