
/* globals describe it expect */

const Ship = require("../src/Ship");
const Port = require("../src/Port");

describe("Ship", () => {
    const ramkinHall = new Port("Ramkin Hall");
    const wonderfulFanny = new Ship(ramkinHall);

    it("can be instantiated", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })

    it("has a starting port", () => {
        expect(wonderfulFanny.startingPort).toBeInstanceOf(Port);
        expect(wonderfulFanny.startingPort).toBe(ramkinHall);
    })

    it("can set sail from port", () => {
        wonderfulFanny.setSail();

        expect(wonderfulFanny.startingPort).toBeFalsy();
    })

    it("can dock", () => {
        wonderfulFanny.dock("Quirm");

        expect(wonderfulFanny.port).toBeInstanceOf(Port);
        expect(wonderfulFanny.port.portName).toBe("Quirm");
    })
    
})