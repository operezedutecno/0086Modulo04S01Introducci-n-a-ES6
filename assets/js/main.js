// var resultado = null

// function sumar(n1, n2) {
//     resultado = n1 + n2
// }

// function restar(n1,n2) {

// }
// sumar(3,4)
// console.log(resultado);


let operacion = 2; //1=suma, 2=reta, 3=multiplicación, 4= División
let n1 = 5;
var n2 = 8;


// let resultado
const porcentaje = 30
if(operacion == 1) {
    var resultado = n1 + n2
}

if(operacion == 2) {
    const porcentaje = 20
    var resultado = n1 - n2
}

// console.log("Resultado", resultado);
// console.log(porcentaje);

const nombre = "Osman";
const apellido = "Pérez";

// const nombreCompleto = nombre+" "+apellido
const nombreCompleto = `${nombre} ${apellido}`
// console.log(nombreCompleto);


// var fila = "<tr>"
// fila+="<td>"+15+"</td>"
// fila += "</tr>"

let fila = `<tr>
    <td>${nombreCompleto}</td>
</tr>`


// function adicion(n1, n2) { // Función con ES5
//     return n1 + n2
// }

const adicion = (n1, n2) => n1 + n2

const division = (n1, n2) => {
    if(n2 === 0)
        return "No es posible dividir entre cero"
    else
        return n1/n2  
}
// console.log(adicion(6,3));
console.log(division(6,1));


// const saludar = nombre => console.log(`Hola ${nombre}`);
const saludar = nombre => {
    console.log(`Hola ${nombre}`);
}

saludar("0086")


// const mostrarMensaje = () => console.log("Estamos trabajando funciones de flecha");
const mostrarMensaje = () => {
    console.log("Estamos trabajando funciones de flecha");
}

mostrarMensaje();