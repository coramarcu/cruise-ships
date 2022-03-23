(function exportPort() {
    class Port {
        constructor(portName) {
            this.portName = portName;
            this.ships = [];
        }

        addShip(ship) {
            this.ships.push(ship);
        }

        removeShip(ship) {
            this.ships.splice(this.ships.indexOf(ship), 1);
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    }

}())