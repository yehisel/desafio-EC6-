import Impuestos from "./Impuestos.js";
import Cliente from './cliente.js';


var obj_impuesto = new Impuestos(1000, 50);
var obj_impuesto1 = new Impuestos(5000, 1000);
var obj_impuesto2 = new Impuestos(3500, 450)

var obj_cliente = new Cliente("juan", obj_impuesto);
var obj_cliente1 = new Cliente("pedro", obj_impuesto1);
var obj_cliente2 = new Cliente("Lola", obj_impuesto2)

console.log (obj_cliente)
console.log (obj_cliente1)
console.log (obj_cliente2)

console.log (obj_cliente.calcular_impuesto());
console.log (obj_cliente1.calcular_impuesto());
console.log (obj_cliente2.calcular_impuesto());

console.log(`El impuesto del cliente ${obj_cliente.nombre} es ${obj_cliente.calcular_impuesto()}`);
console.log(`El impuesto del cliente ${obj_cliente1.nombre} es ${obj_cliente1.calcular_impuesto()}`);
console.log(`El impuesto del cliente ${obj_cliente2.nombre} es ${obj_cliente2.calcular_impuesto()}`);
