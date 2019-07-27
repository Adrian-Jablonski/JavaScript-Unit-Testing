const expect = require("chai").expect;

describe("checkForShip", function() {
    let checkForShip = require("../game-logic/ship-methods").checkForShip;
    let player;

    before(function() {
        // function that runs before any tests
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[1, 0], [1, 1]]
                },
                {
                    locations: [[2, 0], [2, 1], [2, 2], [2, 3]]
                }
            ]
        }; // Should use the most complex player object to be able to run all tests using this one object
    });

    it("should correctly report no ship at a given players coordinate", function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it("should correctly report a ship at the given coordinates", function() {
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    });

    it("should handle ships located at more than one coordinate", function() {
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it("should handle checking multiple ships", function() {
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
        expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);

        expect(checkForShip(player, [9, 9])).to.be.false;
    });
});

describe("damageShip", function() {
    let damageShip = require("../game-logic/ship-methods").damageShip;

    it("should registed damage on a given ship at a given location", function() {
        let ship = {
            locations: [[0, 0]],
            damage: []
        };

        damageShip(ship, [0, 0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });
});

describe("fire", function() {
    let fire = require("../game-logic/ship-methods").fire;
    let player;

    this.beforeEach(function() {
        // beforeEach sets the player variable before each test. Useful if there are tests that alter the player object
        player = {
            ships: [
                {
                    locations: [[0, 0]],
                    damage: []
                }
            ]
        };
    });

    it("should record damage on the given players ship at a given coordinate", function() {
        fire(player, [0, 0]);
        expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
    });

    it("should not record damage if no ship at coordinates", function() {
        fire(player, [9, 9]);
        expect(player.ships[0].damage).to.be.empty;
    });
});
