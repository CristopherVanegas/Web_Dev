const btn = document.querySelector('.button');
const options = document.querySelector('.options');
btn.addEventListener('click', dropdown);

function dropdown() {
    options.classList.toggle('inactive');
}