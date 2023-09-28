export function checkListItemIndent(e) {
    const t = e.options.listItemIndent || "tab";
    if (t === 1 || t === "1") return "one";
    if (t !== "tab" && t !== "one" && t !== "mixed") throw new Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    return t
}
export default null;