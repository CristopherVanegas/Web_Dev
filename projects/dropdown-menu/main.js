const btn = document.querySelector('.button');
const options = document.querySelector('.options');

const VQ_Option = document.querySelector('.VQ_opt');
const speed_opt = document.querySelector('.speed_opt');
const subtitle_opt = document.querySelector('subtitle_opt');
const conematicLight_opt = document.querySelector('.cinematicLight_opt');


btn.addEventListener('click', dropdown);


function dropdown() {
    options.classList.toggle('inactive');
}

function renderAChildOption() {
    
}