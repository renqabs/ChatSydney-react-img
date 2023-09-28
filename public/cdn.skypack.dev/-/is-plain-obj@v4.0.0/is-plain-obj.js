function o(t) {
    if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
    const e = Object.getPrototypeOf(t);
    return e === null || e === Object.prototype
}
export default o;