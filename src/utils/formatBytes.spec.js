const formatBytes = require("./formatBytes");

/*assertEquals(formatBytes(900), '900MB')

assertEquals(formatBytes(1900), '1GB 900MB')

assertEquals(formatBytes(568200), '568GB 200MB')

assertEquals(formatBytes(1234567), "1TB 234GB 567MB");

function assertEquals(result, expectedResult) {
    if (result !== expectedResult) {
        throw new Error(
            `This test is failing: Expected "${expectedResult}", got "${result}"`,
        );
    }
}*/

describe("formatBytes", () => {
    it("formats in MB", () => {
        const result1 = formatBytes(900);
        expect(result1).toEqual("900MB");
    });

    it("formats in MB", () => {
        const result1 = formatBytes(1900);
        expect(result1).toEqual("1GB 900MB");
    });

    it("formats in MB", () => {
        const result1 = formatBytes(568200);
        expect(result1).toEqual("568GB 200MB");
    });

    it("formats in MB", () => {
        const result1 = formatBytes(1234567);
        expect(result1).toEqual("1TB 234GB 567MB");
    });
});