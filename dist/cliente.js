"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Clientes = /*#__PURE__*/function () {
  function Clientes(nombre, impuesto) {
    _classCallCheck(this, Clientes);

    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  _createClass(Clientes, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(new_impuesto) {
      this._impuesto = new_impuesto;
    }
  }, {
    key: "nombred",
    set: function set(new_nombre) {
      this._id = new_nombre;
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    }
  }, {
    key: "calcular_impuesto",
    value: function calcular_impuesto() {
      return this._impuesto.monto_bruto_anual - this._impuesto.deducciones * 0.21;
    }
  }]);

  return Clientes;
}();

var _default = Clientes;
exports["default"] = _default;