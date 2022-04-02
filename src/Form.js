const form = document.querySelector('#form');
const submitBtn = form.querySelector('#submit-btn');

document.addEventListener('DOMContentLoaded', () => {
    submitBtn.addEventListener('click', getFormData);
})

function getFormData(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const newPortName = formData.get('port-name');
    addNewPort(newPortName);
    form.reset();
}

function addNewPort(newPortName) {
    const newPort = new Port(newPortName);
    itinerary.ports.push(newPort);
    controller.renderNewPort(newPort);
}