export function patternCompile(e) {
    if (!e._compiled) {
        const o = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
        e._compiled = new RegExp((o ? "(" + o + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g")
    }
    return e._compiled
}
export default null;