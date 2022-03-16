const currentPort = require("./Port");

class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
    }

    setSail() {
        this.currentPort = null;
    }

    dock(newPort) {
        this.currentPort = newPort;
    }
}

module.exports = Ship