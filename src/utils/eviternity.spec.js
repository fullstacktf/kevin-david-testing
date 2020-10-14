const eviternity = require("./eviternity");

describe("Basic tests", function() {
    Test.assertEquals(solve(0, 100), 4);
    Test.assertEquals(solve(0, 1000), 14);
    Test.assertEquals(solve(0, 10000), 37);
    Test.assertEquals(solve(0, 100000), 103);
    Test.assertEquals(solve(0, 500000), 148);
});