const expect = require("chai").expect;
// Test suite

describe("Mocha", function() {
    // Test spec (unit test)
    it("should run our tests using npm", function() {
        expect(true).to.be.ok; // ok tests whether is truthy
    }); // Tests if mocha works when typing npm test
});
