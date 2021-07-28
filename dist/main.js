"use strict";

var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var obj_impuesto = new _Impuestos["default"](1000, 50);

var obj_cliente = new _cliente["default"]("juan", obj_impuesto);

console.log(obj_cliente);
console.log(obj_cliente.calcular_impuesto());

