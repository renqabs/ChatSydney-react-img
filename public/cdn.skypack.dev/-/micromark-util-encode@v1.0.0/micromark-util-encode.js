const n = {
    '"': "quot",
    "&": "amp",
    "<": "lt",
    ">": "gt"
};

function c(e) {
    return e.replace(/["&<>]/g, t);

    function t(r) {
        return "&" + n[r] + ";"
    }
}
export {
    c as encode
};
export default null;