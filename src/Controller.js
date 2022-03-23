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
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}())