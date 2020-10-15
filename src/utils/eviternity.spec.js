const eviternity = require("./eviternity");

describe("eviternity", () => {
    it("gets eviternity numbers between range", () => {
        const result1 = eviternity(0, 1000);
        expect(result1).toEqual(14);
    });

    it("gets eviternity numbers between range", () => {
        const result1 = eviternity(0, 10);
        expect(result1).toEqual(1);
    });


    it("gets eviternity numbers between range", () => {
        const result1 = eviternity(300, 390);
        expect(result1).toEqual(2);
    });
});