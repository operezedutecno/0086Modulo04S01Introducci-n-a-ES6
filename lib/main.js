"use strict";

// var resultado = null

function sumar(n1, n2) {
    resultado = n1 + n2;
}

// function restar(n1,n2) {

// }
// sumar(3,4)
// console.log(resultado);


var operacion = 2; //1=suma, 2=reta, 3=multiplicación, 4= División
var n1 = 5;
var n2 = 8;

// let resultado
var porcentaje = 30;
if (operacion == 1) {
    var resultado = n1 + n2;
}

if (operacion == 2) {
    var _porcentaje = 20;
    var resultado = n1 - n2;
}

// console.log("Resultado", resultado);
// console.log(porcentaje);

var nombre = "Osman";
var apellido = "Pérez";

// const nombreCompleto = nombre+" "+apellido
var nombreCompleto = nombre + " " + apellido;
// console.log(nombreCompleto);


// var fila = "<tr>"
// fila+="<td>"+15+"</td>"
// fila += "</tr>"

var fila = "<tr>\n    <td>" + nombreCompleto + "</td>\n</tr>";

// function adicion(n1, n2) { // Función con ES5
//     return n1 + n2
// }

var adicion = function adicion(n1, n2) {
    return n1 + n2;
};

var division = function division(n1, n2) {
    if (n2 === 0) return "No es posible dividir entre cero";else return n1 / n2;
};
// console.log(adicion(6,3));
console.log(division(6, 1));

// const saludar = nombre => console.log(`Hola ${nombre}`);
var saludar = function saludar(nombre) {
    console.log("Hola " + nombre);
};

saludar("0086");

// const mostrarMensaje = () => console.log("Estamos trabajando funciones de flecha");
var mostrarMensaje = function mostrarMensaje() {
    console.log("Estamos trabajando funciones de flecha");
};

mostrarMensaje();