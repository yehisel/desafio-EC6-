"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuestos = /*#__PURE__*/function () {
  function Impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, Impuestos);

    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  _createClass(Impuestos, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual;
    }
  }, {
    key: "monto_bruto_anuald",
    set: function set(new_monto_bruto_anual) {
      this._id = new_monto_bruto_anual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    }
  }, {
    key: "nombre",
    set: function set(new_deducciones) {
      this._deducciones = new_deducciones;
    }
  }]);

  return Impuestos;
}();

var _default = Impuestos;
exports["default"] = _default;