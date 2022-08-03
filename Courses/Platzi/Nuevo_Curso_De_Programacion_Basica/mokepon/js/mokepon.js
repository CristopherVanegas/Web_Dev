function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    
}

function seleccionarMascotaJugador() {
    let hipodoge = document.getElementById('hipodoge').checked;
    let capipepo = document.getElementById('capipepo').checked;
    let ratigueya = document.getElementById('ratigueya').checked;


    if ((hipodoge == true) || (capipepo == true) || (ratigueya == true)) {
        alert('¡SELECCIONASTE TU MASCOTA!')
    }

    else {
        alert('Selecciona una mascota por favor!')
    }
    
}


window.addEventListener('load', iniciarJuego)
