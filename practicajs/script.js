
// //JavaScript es debilmente tipado; es debil como otorga los valores a las variables. no da error cuando le asignemos otro valor a una 
// //variable, esto no es una buena practica, ej: si a una variable le pones un objeto numerico, depues le otorgas un valor
// //de texto o sting mejor dicho, el valor se va a mostrar igual,. 


// // console.log(pili.nombre);
// // console.log(numero + 2);
// /* quiere decir; toma este objeto console y llama
// al metodo "log" que tiene ese objeto*/
// //es una buena practica despues de una coma hacer un espacio

// //Tambien existen no primitivos o personalizados por el usuario. 
// //el signo de igual sólo, funciona como asignación. cuando se ponen dos o tres es un COMPARADOR:

// // var a = 2;
// // var b = "9";
// // var c = 9;

// // var d = (b + c) * a;

// // console.log(d);

// // if (b <= c) {
// //     console.log("CONDICION CUMPLIDA!");
// // } else {
// //     console.log("CONDICION NO CUMPLIDA!");
// // }

// var edadDeLaPersona = prompt("ingrese su edad");
// var momentoDelDia = "mañana";

// if (edadDeLaPersona >= 18 || momentoDelDia ==="noche") {
//     alert ("Puede BEBER");
// } else  {
//     alert("No puede beber")
// }

// var mes = prompt("Ingrese el mes del año")


// switch (mes) {
//     case "Enero":
//         alert("estamos en Enero");
//         break;
//     case "Febrero":
//         alert("Estamos en Febrero");
//         break;
//     case "marzo":
//         alert("estamos en Marzo");
//         break;
//     case "abril":
//         alert("estamos en abril");
//     case "Mayo":
//         alert("estamos en mayo");
//         break;
//     case "Junio":
//         alert("Estamos en Junio");
//         break;
//     case "Julio":
//         alert("EStamos en Julio");
//         break;
//     case "Agosto":
//         alert("Estamos en Agosto");
//         break;
//     case "Septiembre":
//         alert("estamos en Septiembre");
//         break;
//     case "Octubre":
//         alert("Estamos en Noviembre!");
//         break;
//     case "Diciembre":
//         alert("Estamos en Diciembre");
//         break;
//     default:
//         alert("Mes Erroneo, vuelva a escribir");
//         break;
// // } 


// lista [0] = 4;
// const nombre = lista[2];

// console.log(nombre);
//  for (var i = 0; i < 6; i++) {
//      lista[i];
//  }


//..
//En caso de no llega a entrar por ninguno de los casos anteriores se pone a lo ultimo
//"default: 
//console.log (""


//     if (edadDeLaPersona >= 18 ) { alert ("PUEDE BEBER!!");
//     if (momentoDelDia ==="noche") {
//         alert ("puede tomar!")
//     }
// }
// else if (edadDeLaPersona >= 70) { alert ("NO DEBERÍA TOMAR");}
//  else (edadDeLaPersona < 18); { alert ("puede beber");
// }

// if ("34" === 34) { 
//     console.log("CONDICIÓN CUMPLIDA!")
// } else {
//     console.log("CONDICION NO CUMPLIDA!")
// }
//cuando se usan tres signos de igual, esta comparando que "d" sea igual a 34 
//y al mismo tiempo sea el mismo tipo de dato que se está comparando. 
//------------------------------------------------------------------------------
//existe el signo ||

//----------------------------------------------------
//elcolor violeta son palabras reservadas de javascript MIRA MIRA MIRA MIRA MIRA

// var lista = ["Pili", 5, true];

// alert(lista);

// //para agarrar un solo elemento de la lista.

// var lista = [7, 5, 9, 5, 25, 98];
// const nombre = lista [2];

// console.log(nombre);

// var lista = [4, 9, 35, 29, 3];

// for (var i = 0; i < lista.length; i++) {
//     lista [i] = lista[i] * 2;
//     console.log(lista[i]);
// }
//esto tambien funciona para textos.


// for (var i = 0; i < texto2.length; i++) {
//     console.log(texto2[i]);
// }

//otra variable es:

// for (var numero of lista) {
//     console.log(numero);
// }
// //por cada numero de la variable lista, vamos a hacer un cosole.log de la variable numero"
// function log(a, b = 2){
//     return a * b;
// }
// var nuevoNumero = log(8);


// var edadDeLaPersona = prompt("Ingrese su edad");

// var momentoDelDia = "mañana";

// var mes = prompt("Ingrese el mes")
// if (edadDeLaPersona >= 18) {
//     if (momentoDelDia === "noche"); {
//         alert("Puede tomar!");
// } else {
//         alert("No puede tomar porque es de día!");
//     }
// } else {
//     alert("No puede tomar!");
// };

// switch (mes) {
//     case "Enero":
//         console.log("Estamos en Enero");
//         break;
//     case "Febrero":
//         console.log("Estamos en Febrero");
//         break;
//     case "Marzo":
//         console.log("Estamos en MArzo");
//         break;
//     case "Abril":
//         console.log("Estamos en Abril");
//         break;
//     case "Mayo":
//         console.log("Estamos en Mayo");
//         break;
//     case "Junio":
//         console.log("Estamos en Junio");
//         break;
//     case "Julio":
//         console.log("Estamos en Julio");
//         break;
//     case "Agosto":
//         console.log("Estamos en Agosto");
//         break;
//     case "Septiembre":
//         console.log("Estamos en Septiembre");
//         break;
//     case "Octubre":
//         console.log("Estamos en Octubre");
//         break;
//     case "Noviembre":
//         console.log("Estamos en Noviembre");
//         break;
//     case "Diciembre":
//         console.log("Estamos en Diciembre");
//         break;
//         default: 
//         alert("ERROR VUELVA A ESCRIBIR")
// }
// function log(a, b = 2) {
//     return a * b;
// }
// console.log(log(8));

// diferencias entre las variables: 

// var manuel = "Manuel";

//  console.log(manuel);

//  let manuel = "Manuel";

//  console.log(manuel)

//  const manuel = "Manuel";

//  console.log(manuel);

// / if (true) {
//      var manuel = "manuel";
//      console.log(manuel);
//  }

//  console.log(manuel);

// si en vez de var usamos let:

// //  if (true) {
// //     let manuel = "manuel";
// //       console.log(manuel);
// }

//  console.log(manuel);

 if (true) {
    const manuel = "manuel";
      console.log(manuel);
 }

 console.log(manuel);
 //funciona igual que let
