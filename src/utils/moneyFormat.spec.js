const moneyFormat = require("./moneyFormat");

assertEquals(moneyFormat(19.99), '$19.99')

assertEquals(moneyFormat(250), '$250.00')

assertEquals(moneyFormat(9500.95), '$9500.95')

function assertEquals(result, expectedResult) {
    if (result != expectedResult) {
        throw new Error(
            'This test is failing: Expected "${expectedResult}"'
        )
    }
}