
/* globals describe it expect */

// I've used ship and port names from Terry Pratchett's book 'Snuff',
// so the ship called 'Wonderful Fanny' is really not my fault.

const Ship = require("../src/Ship");
const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary");

describe("Ship", () => {
    const ramkinHallPort = {name: "Ramkin Hall", ships: [], addShip: jest.fn(), removeShip: jest.fn()};
    const quirmPort = {name: "Quirm", ships: [], addShip: jest.fn(), removeShip: jest.fn()};
    const itinerary = {ports: [ramkinHallPort, quirmPort]};
    const wonderfulFanny = new Ship(itinerary);


    it("can be instantiated", () => {
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    })

    it("has a starting port", () => {
        expect(wonderfulFanny.currentPort).toBe(ramkinHallPort);
    })

    it('gets added to port on instantiation', () => {
        console.log(ramkinHallPort.ships);
        expect(ramkinHallPort.addShip).toHaveBeenCalledWith(wonderfulFanny);
    })

    it("can set sail from port", () => {
        wonderfulFanny.setSail();

        expect(wonderfulFanny.currentPort).toBeFalsy();
        expect(wonderfulFanny.previousPort).toBe(ramkinHallPort);
        expect(ramkinHallPort.removeShip).toHaveBeenCalledWith(wonderfulFanny);
    })

    it("can dock at a different port", () => {
        wonderfulFanny.dock();

        expect(wonderfulFanny.currentPort).toBe(quirmPort);
        expect(quirmPort.addShip).toHaveBeenCalledWith(wonderfulFanny);
    })

    it("can't sail further than its itinerary", () => {
        expect(() => wonderfulFanny.setSail()).toThrowError('End of itinerary reached');
    })

    
})