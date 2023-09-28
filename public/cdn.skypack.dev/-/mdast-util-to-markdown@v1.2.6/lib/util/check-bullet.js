export function checkBullet(t) {
    const e = t.options.bullet || "*";
    if (e !== "*" && e !== "+" && e !== "-") throw new Error("Cannot serialize items with `" + e + "` for `options.bullet`, expected `*`, `+`, or `-`");
    return e
}
export default null;