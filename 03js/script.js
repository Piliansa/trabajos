let preguntas = [
    {
        texto: "¿Cuál es el lugar más frío de la tierra?",
        opciones: [
            "Antartida",
            "Rusia",
            "Noruega",
            "Canadá"
        ],
        respuesta: 0
    },
    {
       texto: "¿Cuál es la avenida más ancha del mundo?",
       opciones: [
           "Gral. Paz",
           "Arturo Illia",
           "9 de Julio",
           "La 5ta avenida"
       ],
       respuesta: 2 //este numero es el índice
    },
    {
        texto: "¿En qué continente está Ecuador?",
        opciones: [
            "América",
            "Asia",
            "África",
            "Europa"
        ],
        respuesta: 0
     },
     {
         texto: "¿Cual de los siguientes es un color primario?",
         opciones: [
             "Negro",
             "amarillo",
             "Marrón",
             "verde"
         ],
         respuesta: 1
     },
     {
         texto: "¿Quién es el creador del cuadro 'el grito'?",
         opciones: [
             "Pablo Picasso",
             "Edvard Munch",
             "Leonardo Da Vinci",
             "Vincent Van Gogh",

         ],
         respuesta: 1
     }
];


//var es lo mismo que let pero tiene algunas diferencias

//refactorizando el codigo.
//en este caso la variable respuesta está hardcodeada. queremos qeu lo genere un algoritmo aleatorio.tenemos otro metodo con la clase:
let pregunta = Math.random() * (preguntas.length) - 1;

pregunta = Math.round(pregunta);

function generarMensaje(i) {
    let mensaje = preguntas[i].texto;
    for (let y in preguntas[i]. opciones){
        let indice = Number(y) + 1;
        mensaje = mensaje + "\n" + (Number(y) + 1) + ". " + preguntas[i].opciones[y] ;
    }
    return mensaje;
}
// \n : hace un salto de linea.  


let respuesta = prompt(generarMensaje(pregunta));

respuesta = Number(respuesta);

if (respuesta - 1 === preguntas[pregunta].respuesta) {
 alert("RESPUESTA CORRECTA!");
 
} else {
    alert("RESPUESTA INCORRECTA!");
}

// esto es: si respuesta es igual a de la lista preguntas la preguntas con el indice 0 
//hardcodeando es poner un dato desde el código. en este caso respuesta está hardcodeada. 
