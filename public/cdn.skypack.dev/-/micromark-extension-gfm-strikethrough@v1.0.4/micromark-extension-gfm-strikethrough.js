import {
    splice as m
} from "../micromark-util-chunked@v1.0.0/micromark-util-chunked.js";
import {
    classifyCharacter as k
} from "../micromark-util-classify-character@v1.0.0/micromark-util-classify-character.js";
import {
    resolveAll as S
} from "../micromark-util-resolve-all@v1.0.0/micromark-util-resolve-all.js";
const j = {
    enter: {
        strikethrough() {
            this.tag("<del>")
        }
    },
    exit: {
        strikethrough() {
            this.tag("</del>")
        }
    }
};

function q(f = {}) {
    let u = f.singleTilde;
    const c = {
        tokenize: y,
        resolveAll: d
    };
    return u == null && (u = !0), {
        text: {
            [126]: c
        },
        insideSpan: {
            null: [c]
        },
        attentionMarkers: {
            null: [126]
        }
    };

    function d(r, i) {
        let t = -1;
        for (; ++t < r.length;)
            if (r[t][0] === "enter" && r[t][1].type === "strikethroughSequenceTemporary" && r[t][1]._close) {
                let e = t;
                for (; e--;)
                    if (r[e][0] === "exit" && r[e][1].type === "strikethroughSequenceTemporary" && r[e][1]._open && r[t][1].end.offset - r[t][1].start.offset === r[e][1].end.offset - r[e][1].start.offset) {
                        r[t][1].type = "strikethroughSequence", r[e][1].type = "strikethroughSequence";
                        const n = {
                                type: "strikethrough",
                                start: Object.assign({}, r[e][1].start),
                                end: Object.assign({}, r[t][1].end)
                            },
                            s = {
                                type: "strikethroughText",
                                start: Object.assign({}, r[e][1].end),
                                end: Object.assign({}, r[t][1].start)
                            },
                            l = [
                                ["enter", n, i],
                                ["enter", r[e][1], i],
                                ["exit", r[e][1], i],
                                ["enter", s, i]
                            ];
                        m(l, l.length, 0, S(i.parser.constructs.insideSpan.null, r.slice(e + 1, t), i)), m(l, l.length, 0, [
                            ["exit", s, i],
                            ["enter", r[t][1], i],
                            ["exit", r[t][1], i],
                            ["exit", n, i]
                        ]), m(r, e - 1, t - e + 3, l), t = e + l.length - 2;
                        break
                    }
            }
        for (t = -1; ++t < r.length;) r[t][1].type === "strikethroughSequenceTemporary" && (r[t][1].type = "data");
        return r
    }

    function y(r, i, t) {
        const e = this.previous,
            n = this.events;
        let s = 0;
        return l;

        function l(o) {
            return e === 126 && n[n.length - 1][1].type !== "characterEscape" ? t(o) : (r.enter("strikethroughSequenceTemporary"), p(o))
        }

        function p(o) {
            const a = k(e);
            if (o === 126) return s > 1 ? t(o) : (r.consume(o), s++, p);
            if (s < 2 && !u) return t(o);
            const g = r.exit("strikethroughSequenceTemporary"),
                h = k(o);
            return g._open = !h || h === 2 && Boolean(a), g._close = !a || a === 2 && Boolean(h), i(o)
        }
    }
}
export {
    q as gfmStrikethrough, j as gfmStrikethroughHtml
};
export default null;