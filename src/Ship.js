const Port = require("./Port");

class Ship {
    constructor(startingPort) {
        this.startingPort = startingPort;
    }

    setSail() {
        delete this.startingPort;
    }

    dock(portName) {
        this.port = new Port(portName);
    }
}

module.exports = Ship