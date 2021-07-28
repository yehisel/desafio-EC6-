/*
//ES5
function suma(a,b){
   return a + b; 
}


//ES6 function arrow
var suma = (a,b) => {
    var resultado = a + b;
    return resultado;
}*/

//ES6 function arrow
var suma = (a,b) => a + b;
console.log(suma(10,3));

var persona = {
    id: 10,
    nombre: "Osman",
    saludar: () => {
        console.log(`Hola ${this.nombre}`);
        console.log('Hola '+this.nombre);
    }
}

//persona.saludar();


var mostrarMensaje = (mensaje = 'Por favor asignar mensaje') => {
    console.log(mensaje);
}

//mostrarMensaje();

var multiplicar = (n1, n2 = 10) => n1 * n2;

//console.log(multiplicar(5));


const valor = 10;
//valor = 9;

var numero = 5;
console.log(numero);
numero = 8;
console.log(numero);

console.warn("Inicio del ciclo");

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(index);
}
console.log("Mostrar variable", index);