# JavaScript-Unit-Testing

Mocha and Chai unit testing course

The done parameter needs to be used in before request for asynchronous requests to be completed before anything else. Mocha will then wait until done is called to start processing the following blocks. See below example
```javascript
describe("Mocha", function () {

    before((done) => {
        dbTest.none(`
            DATABASE LOGIC
        `).then(() => {
            done();
        }).catch((err) => {
            console.log(err);
        })
    })

    it("should run our tests using npm", function (done) {
        console.log("**Running next")
        expect(true).to.be.ok;
        done();
    }); // Tests if mocha works when typing npm test
});
```
