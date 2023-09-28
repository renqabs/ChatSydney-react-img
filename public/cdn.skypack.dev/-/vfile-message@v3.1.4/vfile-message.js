import {
    stringifyPosition as u
} from "../unist-util-stringify-position@v3.0.3/unist-util-stringify-position.js";
class i extends Error {
    constructor(s, t, o) {
        const n = [null, null];
        let e = {
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
        if (typeof t == "string" && (o = t, t = void 0), typeof o == "string") {
            const l = o.indexOf(":");
            l === -1 ? n[1] = o : (n[0] = o.slice(0, l), n[1] = o.slice(l + 1))
        }
        t && ("type" in t || "position" in t ? t.position && (e = t.position) : "start" in t || "end" in t ? e = t : ("line" in t || "column" in t) && (e.start = t)), this.name = u(t) || "1:1", this.message = typeof s == "object" ? s.message : s, this.stack = "", typeof s == "object" && s.stack && (this.stack = s.stack), this.reason = this.message, this.fatal, this.line = e.start.line, this.column = e.start.column, this.position = e, this.source = n[0], this.ruleId = n[1], this.file, this.actual, this.expected, this.url, this.note
    }
}
i.prototype.file = "", i.prototype.name = "", i.prototype.reason = "", i.prototype.message = "", i.prototype.stack = "", i.prototype.fatal = null, i.prototype.column = null, i.prototype.line = null, i.prototype.source = null, i.prototype.ruleId = null, i.prototype.position = null;
export {
    i as VFileMessage
};
export default null;