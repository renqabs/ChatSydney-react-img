import {
    stringifyPosition as u
} from "../unist-util-stringify-position@v3.0.2/unist-util-stringify-position.js";
class i extends Error {
    constructor(e, t, s) {
        const n = [null, null];
        let o = {
            start: {
                line: null,
                column: null
            },
            end: {
                line: null,
                column: null
            }
        };
        super();
        if (typeof t == "string" && (s = t, t = void 0), typeof s == "string") {
            const l = s.indexOf(":");
            l === -1 ? n[1] = s : (n[0] = s.slice(0, l), n[1] = s.slice(l + 1))
        }
        t && ("type" in t || "position" in t ? t.position && (o = t.position) : "start" in t || "end" in t ? o = t : ("line" in t || "column" in t) && (o.start = t)), this.name = u(t) || "1:1", this.message = typeof e == "object" ? e.message : e, this.stack = typeof e == "object" ? e.stack : "", this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.source = n[0], this.ruleId = n[1], this.position = o, this.actual, this.expected, this.file, this.url, this.note
    }
}
i.prototype.file = "", i.prototype.name = "", i.prototype.reason = "", i.prototype.message = "", i.prototype.stack = "", i.prototype.fatal = null, i.prototype.column = null, i.prototype.line = null, i.prototype.source = null, i.prototype.ruleId = null, i.prototype.position = null;
export {
    i as VFileMessage
};
export default null;