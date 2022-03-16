
/* globals describe it expect */

const Ship = require("../src/Ship");
const Port = require("../src/Port");

describe("Ship", () => {
    const ramkinHall = new Port("Ramkin Hall");
    const quirm = new Port("Quirm");
    const wonderfulFanny = new Ship(ramkinHall);

    it("can be instantiated", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })

    it("has a starting port", () => {
        expect(wonderfulFanny.currentPort).toBeInstanceOf(Port);
        expect(wonderfulFanny.currentPort).toBe(ramkinHall);
    })

    it("can set sail from port", () => {
        wonderfulFanny.setSail();

        expect(wonderfulFanny.currentPort).toBeFalsy();
    })

    it("can dock", () => {
        wonderfulFanny.dock(quirm);

        expect(wonderfulFanny.currentPort).toBeInstanceOf(Port);
        expect(wonderfulFanny.currentPort.portName).toBe("Quirm");
    })
    
})