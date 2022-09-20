const button = document.querySelector('.button');
const saludo = document.querySelector('.saludo');

button.addEventListener('click', clickedButton);

function clickedButton () {
    saludo.classList.toggle('inactive');
}
