const l = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi,
    o = new RegExp("^" + l.source, "i"),
    s = {
        exit: {
            htmlFlowData(t) {
                a.call(this, t, l)
            },
            htmlTextData(t) {
                a.call(this, t, o)
            }
        }
    };

function a(t, i) {
    let e = this.sliceSerialize(t);
    this.options.allowDangerousHtml && (e = e.replace(i, "&lt;$1$2")), this.raw(this.encode(e))
}
export {
    s as gfmTagfilterHtml
};
export default null;