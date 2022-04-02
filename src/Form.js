const form = document.querySelector('#form');
const submitBtn = form.querySelector('#submit-btn');

document.addEventListener('DOMContentLoaded', () => {
    submitBtn.addEventListener('click', getFormData);
})

function getFormData(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const newPortName = formData.get('port-name');
    console.log(newPortName);
    addNewPort(newPortName);
    form.reset();
}

function addNewPort(newPortName) {
    const newPort = new Port(newPortName);
    console.log('added new port with name of: ' + newPortName);
    console.log("actual object: " + JSON.stringify(newPort));
    itinerary.ports.push(newPort);
    controller.renderNewPort(newPort);
    console.log(itinerary.ports);
}