
let ataqueJugador;


function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    alert(ataqueJugador);
}

function ataqueAgua() {
    ataqueJugador = 'AGUA';
    alert(ataqueJugador);
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    alert(ataqueJugador);
}


function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);



}


function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');

    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if (inputHipodoge.checked) {
        alert('Seleccionaste a Hipodogue');
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        alert('Seleccionaste a Capipepo');
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        alert('Seleccionaste a Ratigueya');
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert('Selecciona una mascota!')
    }

    seleccionarMascotaEnemigo();
}


function aleatorio(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}


function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    
    switch (ataqueAleatorio) {
        // Hipodoge
        case 1:
            spanMascotaEnemigo.innerHTML = 'Hipodoge';
            break;

        // Capipepo
        case 2:
            spanMascotaEnemigo.innerHTML = 'Capipepo';
            break;

        // Ratigueya
        case 3:
            spanMascotaEnemigo.innerHTML = 'Ratigueya';
            break;

    }
}


window.addEventListener('load', iniciarJuego)
