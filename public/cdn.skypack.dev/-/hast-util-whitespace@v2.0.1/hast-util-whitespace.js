function o(e) {
    const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
    return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === ""
}
export {
    o as whitespace
};
export default null;