function formatBytes(num) {
    let content = num.toString().split("");
    let mb = "",
        gb = "",
        tb = "";

    let result = "";

    for (let index = content.length - 1; index >= content.length - 3; index--) {
        if (content[index] != undefined) mb += content[index] + "";
    }

    for (let index = content.length - 4; index >= content.length - 6; index--) {
        if (content[index] != undefined) gb += content[index] + "";
    }

    for (
        let index = content.length - 7; index >= content.length - 11; index--
    ) {
        if (content[index] != undefined) tb += content[index] + "";
    }

    tb = tb.split("").reverse().join("");

    gb = gb.split("").reverse().join("");

    mb = mb.split("").reverse().join("");

    if (tb.length != 0) result += tb + "TB ";

    if (gb.length != 0) result += gb + "GB ";

    if (mb.length != 0) result += mb + "MB";

    return result;
}

module.exports = formatBytes;