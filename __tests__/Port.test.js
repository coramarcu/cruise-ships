const Port = require("../src/Port");

describe("Port", () => {
    const ramkinHallPort = new Port('Ramkin Hall')
    const quirmPort = new Port("Quirm");
    const itinerary = {ports: [ramkinHallPort, quirmPort]};
    const wonderfulFanny = {itinerary: itinerary, currentPort: itinerary.ports[0], previousPort: null, setSail: jest.fn(), dock: jest.fn()}

    it("can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it("has a port name", () => {
        expect(quirmPort.portName).toBe("Quirm");
    })

    it('has a ships property', () => {
        expect(quirmPort.ships).toBeTruthy();
    })

    it('can add a ship', () => {
        quirmPort.addShip(wonderfulFanny);
        expect(quirmPort.ships).toContain(wonderfulFanny);
    })
    
    it('can remove a ship', () => {
        quirmPort.removeShip(wonderfulFanny);
        expect(quirmPort.ships).toEqual([]);
    })

})
