const opciones = ["verde", "rojo", "azul", "amarillo"];
let listaJugador = [];
let listaComputadora = [];
function opcionAleatoria() {
    let aleatorio = Math.floor(Math.random() * 4);
    let opcion = opciones[aleatorio];
    return opcion;
}
setTimeout(
    function comenzarJuego() {
        $("#cuadro").unbind();
        $(".cuadro").click(chequearOpciones);
        listaJugador = [];
        listaComputadora = []; //es igual a una lista vacía
        let opcion = opcionAleatoria();
        agregarOpcion(opcion);

    }, 1500);
var bleep = new Audio();
bleep.src = "Jump.wav";

var notado = new Audio();
notado.src = "do.wav";

var notare = new Audio();
notare.src = "re.wav";

var notami = new Audio();
notami.src = "mi.wav";

var notafa = new Audio();
notafa.src = "fa.wav";

function agregarOpcion(opcion) {
    listaComputadora.push(opcion);
    for (let indice in listaComputadora) {
        setTimeout(function () {
            $("#" + listaComputadora[indice]).addClass(listaComputadora[indice] + "-fuerte");
            setTimeout(function () {
                $("#" + listaComputadora[indice]).removeClass(listaComputadora[indice] + "-fuerte");
            }, 500);
        }, indice * 800);

    }

}

function chequearOpciones(e) {
    listaJugador.push(e.target.id);
    let i = listaJugador.length - 1;
    if (listaJugador[i] !== listaComputadora[i]) {
        perdio();
        return;
    }
    if (listaJugador.length === listaComputadora.length) {
        listaJugador = [];
        let opcion = opcionAleatoria();
        agregarOpcion(opcion);

    }

}

function perdio() {
    $("#puntaje").text(listaComputadora.length - 1);
    listaJugador = [];
    listaComputadora = [];
    $("#cuadro").unbind();
    let mensaje = document.getElementById("resultado");
    let texto = "GAME OVER";
    mensaje.textContent = texto;

}
let boton = $("#boton");
boton.click(comenzarJuego);
