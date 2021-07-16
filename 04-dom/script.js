const opciones = ["rock", "paper", "scissor"];

const url = "http://localhost/04-dom/";

function comenzarJuego(e, jugador, computadora) {
    return function () {
        
        agregarEvento();
        jugador.classList.remove("jugador1");
        computadora.classList.remove("computadora1");
        let aleatorio = Math.random();
        let entero = Math.round(aleatorio * 2);
        let opcionJugador = e.target.id;
        jugador.src = url + opcionJugador + ".png";
        computadora.src = url + opciones[entero] + ".png";
        let resultado = chequearOpciones(opcionJugador, opciones[entero]);
        let mensaje = document.getElementById("resultado");
        let texto;
        switch (resultado) {
            case "¡EMPATE!":
                texto = ("EMPATASTE!");
                break;
            case "¡GANASTE!":
                texto = ("GANASTE!");
                break;
            case "¡PERDISTE!":
                texto = ("PERDISTE!");
                break;
        }
        mensaje.textContent = texto;
    }
}


// $(document).ready(function(){
//     $(document.onclick(function(){
//         $("audio") [0].play();
//     }));
// });

function opcionSeleccionada(e) {
    eliminarEvento();
    let jugador = document.getElementById("jugador");
    let computadora = document.getElementById("computadora");
    jugador.classList.add("jugador1");
    computadora.classList.add("computadora1");
    jugador.src = url + "mano.png";
    computadora.src = url + "manoder.png";
    setTimeout(comenzarJuego(e, jugador, computadora), 3000);

} //cuando ve una declaracion de una funcion, no ejecuta lo que está adentro. en el caso de no estar en una ejecucion (adentro de una llave, si la ejecuta y
// no hay que ponerle los parentesis)

function chequearOpciones(opcionJugador, opcionComputadora) {
    if (opcionComputadora === opcionJugador)
        return "¡EMPATE!";
    if (opcionJugador === "rock") {
        switch (opcionComputadora) {
            case "paper":
                return "¡PERDISTE!";
            case "scissor":
                return "¡GANASTE!";
        }
    }
    if (opcionJugador === "paper") {
        switch (opcionComputadora) {
            case "rock":
                return "¡GANASTE!"
            case "scissor":
                return "¡PERDISTE!";
        }
    }
    if (opcionJugador === "scissor") {
        switch (opcionComputadora) {
            case "rock":
                return "¡PERDISTE!";
            case "paper":
                return "¡GANASTE!";
        }
    }

}
// let audio = document.getElementById()
// function audioClick() {
//     audio.src = url + "multimedia/Pickup_Coin2.wav";
//     audio.play("click", opcionSeleccionada);
// }

let piedra = document.getElementById("rock");
let papel = document.getElementById("paper");
let tijera = document.getElementById("scissor");

function agregarEvento() {
    piedra.addEventListener("click", opcionSeleccionada);
    papel.addEventListener("click", opcionSeleccionada);
    tijera.addEventListener("click", opcionSeleccionada);

}
function eliminarEvento() {
    piedra.removeEventListener("click", opcionSeleccionada,);
    papel.removeEventListener("click", opcionSeleccionada);
    tijera.removeEventListener("click", opcionSeleccionada);
}
agregarEvento();