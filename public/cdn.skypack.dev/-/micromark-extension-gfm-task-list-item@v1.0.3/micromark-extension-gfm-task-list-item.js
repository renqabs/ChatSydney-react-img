import {
    factorySpace as c
} from "../micromark-factory-space@v1.0.0/micromark-factory-space.js";
import {
    markdownLineEndingOrSpace as h,
    markdownLineEnding as m
} from "../micromark-util-character@v1.1.0/micromark-util-character.js";
const u = {
        enter: {
            taskListCheck() {
                this.tag('<input type="checkbox" disabled="" ')
            }
        },
        exit: {
            taskListCheck() {
                this.tag("/>")
            },
            taskListCheckValueChecked() {
                this.tag('checked="" ')
            }
        }
    },
    o = {
        tokenize: p
    },
    l = {
        text: {
            [91]: o
        }
    };

function p(t, a, i) {
    const r = this;
    return k;

    function k(e) {
        return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? i(e) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(e), t.exit("taskListCheckMarker"), n)
    }

    function n(e) {
        return h(e) ? (t.enter("taskListCheckValueUnchecked"), t.consume(e), t.exit("taskListCheckValueUnchecked"), s) : e === 88 || e === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(e), t.exit("taskListCheckValueChecked"), s) : i(e)
    }

    function s(e) {
        return e === 93 ? (t.enter("taskListCheckMarker"), t.consume(e), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), t.check({
            tokenize: C
        }, a, i)) : i(e)
    }
}

function C(t, a, i) {
    const r = this;
    return c(t, k, "whitespace");

    function k(n) {
        const s = r.events[r.events.length - 1];
        return (s && s[1].type === "whitespace" || m(n)) && n !== null ? a(n) : i(n)
    }
}
export {
    l as gfmTaskListItem, u as gfmTaskListItemHtml
};
export default null;