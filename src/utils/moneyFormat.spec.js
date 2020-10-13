const moneyFormat = require("./moneyFormat");

describe("formatMoney", () => {
    it("formats in $", () => {
        const result1 = moneyFormat(900);
        expect(result1).toEqual("$900.00");
    });

    it("formats in $", () => {
        const result1 = moneyFormat(250);
        expect(result1).toEqual("$250.00");
    });

    it("formats in $", () => {
        const result1 = moneyFormat(9500.95);
        expect(result1).toEqual("$9500.95");
    });


});