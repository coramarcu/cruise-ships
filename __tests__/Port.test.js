const Itinerary = require("../src/Itinerary");
const Port = require("../src/Port");
const Ship = require("../src/Ship");

describe("Port", () => {
    const ramkinHall = new Port('Ramkin Hall')
    const quirm = new Port("Quirm");
    const itinerary = new Itinerary([ramkinHall, quirm])
    const wonderfulFanny = new Ship(itinerary)

    it("can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it("has a port name", () => {
        expect(quirm.portName).toBe("Quirm");
    })

    it('has a ships property', () => {
        expect(quirm.ships).toBeTruthy();
    })

    it('can add a ship', () => {
        quirm.addShip(wonderfulFanny);
        expect(quirm.ships).toContain(wonderfulFanny);
    })
    
    it('can remove a ship', () => {
        quirm.removeShip(wonderfulFanny);
        expect(quirm.ships).toEqual([]);
    })

})
