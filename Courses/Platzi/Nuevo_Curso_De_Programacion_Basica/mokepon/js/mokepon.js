function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');

    if (inputHipodoge.checked) {
        alert('Seleccionaste a Hipodogue');
    } else if (inputCapipepo.checked) {
        alert('Seleccionaste a Capipepo');
    } else if (inputRatigueya.checked) {
        alert('Seleccionaste a Ratigueya');
    } else {
        alert('Selecciona una mascota!')
    }

    /*
    if ((hipodoge == true) || (capipepo == true) || (ratigueya == true)) {
        alert('¡SELECCIONASTE TU MASCOTA!')
    } else {
        alert('Selecciona una mascota por favor!')
    }
    */
    
}


window.addEventListener('load', iniciarJuego)
