function aleatorio(min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}

// 1 es piedra, 2 es papel, 3 es tijera 
let jugador = 0;
let pc = aleatorio(1, 3);   // IT'S NOT NECCESSARY TO CREATE MIN AND MAX VARIABLES BECAUSE THOSE VALUES ARE BEEN CREATED INSIDE THE FUNCTION ONCE I'VE INVOKED THAT.
jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

if (jugador == 1) {
    alert("Elegiste 🪨")
} else if (jugador == 2) {
    alert("Elegiste 📄")
} else if (jugador == 3) {
    alert("Elegiste ✂️")
} else {
    alert("Por favor elige un valor 1 o 2 o 3")
}

if (pc == 1) {
    alert("PC 🪨")
} else if (pc == 2) {
    alert("PC 📄")
} else if (pc == 3) {
    alert("PC ✂️")
}

// COMBATE
if (pc == jugador) {
    alert('EMPATE')
} else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {   // FIRST, SECOND AND THIRD WIN SCENERY IN JUST ONE CONDITION
    alert('GANASTE')
} else {    // LOST SCENERY
    alert('PERDISTE')
}