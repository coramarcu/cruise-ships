
/* globals describe it expect */

const Ship = require("../src/ship");

describe("Ship", () => {
    it("can be instantiated", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })

    it("has a starting port", () => {
        const wonderfulFanny = new Ship("Ramkin Hall");
        expect(wonderfulFanny.startingPort).toBe("Ramkin Hall");
    })
    
})