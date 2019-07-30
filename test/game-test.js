var expect = require("chai").expect;

describe("GAME INSTANCE FUNCTIONS", function() {
    describe("pending test example", function() {
        it("This is a pending test"); // This is considered a pending test since it does not have a function
    });
    describe("checkGameStatus", function() {
        var checkGameStatus = require("../game-logic/game-instance.js")
            .checkGameStatus;
        it("should tell me when the game is over", function() {
            var players = [
                {
                    ships: [
                        {
                            locations: [[0, 0]],
                            damage: [[0, 0]]
                        }
                    ]
                }
            ];
            var actual = checkGameStatus(players);
            expect(actual).to.be.false;
        });
    });
});
