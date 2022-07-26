let circle = document.querySelector('.circle');
const moveCircle = (e) => {
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
}

const addPulse = () => {
    circle.classList.toggle('active');
}

window.addEventListener('mousemove', moveCircle);   // THIS READS THE MOUSE MOVE AND APPLY THE moveCircle function when a event is been listening.
window.addEventListener('mousedown', addPulse);     // THIS READS 
//window.addEventListener('mouseup', addPulse);
