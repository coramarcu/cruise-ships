
/* globals describe it expect */

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

    it("can set sail from port", () => {
        wonderfulFanny.setSail();

        expect(wonderfulFanny.currentPort).toBeFalsy();
        expect(wonderfulFanny.previousPort).toBe(ramkinHall);
    })

    it("can dock", () => {
        wonderfulFanny.dock();

        expect(wonderfulFanny.currentPort).toBe(quirm);
    })

    it("can't sail further than its itinerary", () => {
        expect(() => wonderfulFanny.setSail()).toThrowError('End of itinerary reached');
    })
    
})