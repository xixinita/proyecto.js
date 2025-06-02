alert(
  "                          HOLA!  \n \n Hoy vamos a jugar al PIEDRA, PAPEL o TIJERA"
);

const jugador1 = prompt("Escribe tu nombre \n");

alert("Hola " + jugador1 + "! \n  Elige tu jugada:");

function resultado(jugador1Jugada, pcJugada, i) {
  let counter = [0, 0];

  if (jugador1Jugada === pcJugada) {
    alert("RONDA " + i + " \n \n ¡EMPATE!");
  } else if (
    (jugador1Jugada === "piedra" && pcJugada === "tijera") ||
    (jugador1Jugada === "papel" && pcJugada === "piedra") ||
    (jugador1Jugada === "tijera" && pcJugada === "papel")
  ) {
    alert("RONDA " + i + " \n \n ¡GANASTE!");
    counter[0] = counter[0] + 1;
  } else {
    alert("RONDA " + i + " \n \n ¡PERDISTE!");
    counter[1] = counter[1] + 1;
  }

  return counter;
}

function juego() {
  let total = [0, 0]; // [jugador1, pc]

  for (let i = 1; i <= 3; i++) {
    // jugada jogador
    let jugador1Jugada = prompt(
      " RONDA " + i + " \n \n Escribe piedra, papel o tijera"
    ).toLowerCase();

    if (
      jugador1Jugada !== "piedra" &&
      jugador1Jugada !== "papel" &&
      jugador1Jugada !== "tijera"
    ) {
      alert(
        "RONDA " +
          i +
          " \n \n Jugada no válida. Por favor, elige piedra, papel o tijera."
      );
      i--;
      continue;
    }

    // jugada pc
    let pcJugada = Math.random();

    if (pcJugada < 0.34) {
      pcJugada = "piedra";
    } else if (pcJugada <= 0.67) {
      pcJugada = "papel";
    } else {
      pcJugada = "tijera";
    }

    alert(" RONDA " + i + " \n \n La jugada del PC es: " + pcJugada);

    let counter = resultado(jugador1Jugada, pcJugada, i);

    total[0] += counter[0];
    total[1] += counter[1];
    
  }

  return total;
}

let score = juego();

if (score[0] > score[1]) {
  alert("¡Felicidades " + jugador1 + "! Has ganado el juego!");
} else if (score[0] < score[1]) {
  alert("Lo siento " + jugador1 + ", has perdido el juego.");
} else {
  alert("El juego ha terminado en empate.");
}
