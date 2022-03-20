
/* globals describe it expect */

// I've used ship and port names from Terry Pratchett's book 'Snuff',
// so the ship called 'Wonderful Fanny' is really not my fault.

const Ship = require("../src/Ship");
const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary");

describe("Ship", () => {
    const ramkinHall = new Port("Ramkin Hall");
    const quirm = new Port("Quirm");
    const itinerary = new Itinerary([ramkinHall, quirm])
    const wonderfulFanny = new Ship(itinerary);


    it("can be instantiated", () => {
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    })

    it("has a starting port", () => {
        expect(wonderfulFanny.currentPort).toBe(ramkinHall);
    })

    it('gets added to port on instantiation', () => {
        expect(wonderfulFanny.currentPort.ships).toContain(wonderfulFanny);
    })

    it("can set sail from port", () => {
        wonderfulFanny.setSail();

        expect(wonderfulFanny.currentPort).toBeFalsy();
        expect(wonderfulFanny.previousPort).toBe(ramkinHall);
        expect(wonderfulFanny.previousPort.ships).not.toContain(wonderfulFanny);
    })

    it("can dock at a different port", () => {
        wonderfulFanny.dock();

        expect(wonderfulFanny.currentPort).toBe(quirm);
        expect(quirm.ships).toContain(wonderfulFanny);
    })

    it("can't sail further than its itinerary", () => {
        expect(() => wonderfulFanny.setSail()).toThrowError('End of itinerary reached');
    })

    
})