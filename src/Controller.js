(function exportController() {
    class Controller {
        constructor(ship) {
            this.ship = ship;
            this.initialiseSea();
            this.waterState = false; // here false represents water0.png
            
            document.querySelector('#sailbutton').addEventListener('click', () => {
                this.setSail();
            })
        }

        initialiseSea() {
            window.setInterval(this.changeWater, 1000)
        }

        changeWater() {
            const viewport = document.querySelector('#viewport');

            if(!this.waterState) {
                viewport.style.backgroundImage = "url(../images/water1.png)";
                this.waterState = true;
            } else {
                viewport.style.backgroundImage = "url(../images/water0.png)";
                this.waterState = false;
            }
        }

        renderPorts(ports) {
            const portsElement = document.querySelector('#ports');
            portsElement.style.width = '0px';

            ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port';
                newPortElement.dataset.portName = port.name;
                newPortElement.dataset.portIndex = index;

                portsElement.appendChild(newPortElement); 
                
                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;
            });
        }

        renderShip() {
            const shipPortIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
            const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
            const shipElement = document.querySelector('#ship');

            shipElement.style.top = `${portElement.offsetTop + 32}px`;
            shipElement.style.left = `${portElement.offsetLeft - 32}px`;
        }

        setSail() {
            this.renderMessage(`Leaving ${this.ship.currentPort.portName}`);

            const currentPortIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
            const nextPortindex = currentPortIndex + 1;
            const nextPortElement = document.querySelector(`[data-port-index='${nextPortindex}']`);

            if (!nextPortElement) {
                return this.renderMessage('End of line!')
            }

            const shipElement = document.querySelector('#ship');
            const sailInterval = setInterval(() => {
                const shipLeft = parseInt(shipElement.style.left, 10);
                if (shipLeft === (nextPortElement.offsetLeft -32)) {
                    this.ship.setSail();
                    this.ship.dock();
                    this.renderMessage(`Docking at ${this.ship.currentPort.portName}`);
                    clearInterval(sailInterval);
                }

                shipElement.style.left = `${shipLeft +1}px`;
            }, 10);            

        }

        renderMessage(message) {
            const viewport = document.querySelector('#viewport');
            const messageElement = document.createElement('div');

            messageElement.setAttribute('id', 'message');
            viewport.appendChild(messageElement);
            messageElement.innerHTML = message;

            const timeout = setTimeout(() => {viewport.removeChild(messageElement)}, 2000);
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}())