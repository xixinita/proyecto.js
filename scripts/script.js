alert("                          HOLA!  \n \n  Vamos a jugar al PIEDRA, PAPEL o TIJERA");

let jugador1 = prompt("Escribe tu nombre \n");

alert("Hola " + jugador1 + "! \n  Elige tu jugada:");

for (let i = 1; i <= 3; i++) {

  let jugador1Jugada = prompt(
    " RONDA " + i + " \n \n Escribe piedra, papel o tijera"
  ).toLowerCase();
  if(jugador1Jugada !== "piedra" && jugador1Jugada !== "papel" && jugador1Jugada !== "tijera") {
    alert("RONDA " + i + " \n \n Jugada no válida. Por favor, elige piedra, papel o tijera.");
    i--; 
    continue; 
  }

  let pcJugada = Math.random();

  if (pcJugada < 0.34) {
    pcJugada = "piedra";
  } else if (pcJugada <= 0.67) {
    pcJugada = "papel";
  } else {
    pcJugada = "tijera";
  }

  alert(" RONDA " + i + " \n \n La jugada del PC es: " + pcJugada);
  if (jugador1Jugada === pcJugada) {
    alert("RONDA " + i + " \n \n ¡EMPATE!");
  } else if (
    (jugador1Jugada === "piedra" && pcJugada === "tijera") ||
    (jugador1Jugada === "papel" && pcJugada === "piedra") ||
    (jugador1Jugada === "tijera" && pcJugada === "papel")
  ) {
    alert("RONDA " + i + " \n \n ¡GANASTE!");
  } else {
    alert("RONDA " + i + " \n \n ¡PERDISTE!");
  }
}
