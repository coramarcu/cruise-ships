const Port = require("../src/Port");

describe("Port", () => {
    const quirm = new Port("Quirm");

    it("can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it("has a port name", () => {
        expect(quirm.portName).toBe("Quirm");
    })
    
})
