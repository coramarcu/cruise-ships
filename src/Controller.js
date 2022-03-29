(function exportController() {
    class Controller {
        constructor() {
            this.initialiseSea();
            this.waterState = false; // here false represents water0.png
        }

        initialiseSea() {
            window.setInterval(this.changeWater, 1000)
        }

        changeWater() {
            let viewport = document.querySelector('#viewport');

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
                console.log(portsElement.style.width);
            });
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}())