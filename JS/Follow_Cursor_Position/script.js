let circle = document.querySelector('.circle');
const moveCircle = (e) => {
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
}

const addPulse = () => {
    circle.classList.toggle('active');
}

window.addEventListener('mousemove', moveCircle);   // THIS READS THE MOUSE MOVE AND APPLY THE moveCircle function when a event is been listening.
window.addEventListener('mousedown', addPulse);     // THIS READS THE MOUSE DOWN MOVEMENT AND APPLY THE  addPulse function event when it's necessary.
window.addEventListener('mouseup', addPulse);       // THIS READS THE MOUSE MOVEMENT AND APPLY THE addPulse function event when it's necessary.
