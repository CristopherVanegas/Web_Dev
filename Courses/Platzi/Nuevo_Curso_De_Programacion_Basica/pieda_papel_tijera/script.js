// PRIMERO SE DECLARAN LAS FUNCIONES PARA LUEGO USARLAS //
// Función aleatoria
function aleatorio(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}

// Funcion de elección
function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra 🪨";
    } else if (jugada == 2) {
        resultado = "Papel 📄";
    } else if (jugada == 3) {
        resultado = "Tijera ✂️";
    } else {
        resultado = "MAL SELECCIONADO";
    }
    return resultado;
}


// 1 es piedra, 2 es papel, 3 es tijera 
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while ( triunfos < 3 && perdidas < 3 ) {
    pc = aleatorio(1, 3);   // IT'S NOT NECCESSARY TO CREATE MIN AND MAX VARIABLES BECAUSE THOSE VALUES ARE BEEN CREATED INSIDE THE FUNCTION ONCE I'VE INVOKED THAT.
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

    alert('Tú eliges: ' + eleccion(jugador));
    alert('PC elige: ' + eleccion(pc));

    // COMBATE
    if (pc == jugador) {
        alert('EMPATE')
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {   // FIRST, SECOND AND THIRD WIN SCENERY IN JUST ONE CONDITION
        alert('GANASTE')
        triunfos = triunfos + 1;
    } else {    // LOST SCENERY
        alert('PERDISTE')
        perdidas = perdidas + 1;
    }
}

alert('Ganaste ' + triunfos + ' veces. Perdiste ' + perdidas + ' veces.');
