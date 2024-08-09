"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class Cliente {
  constructor(nombre) {
    let impuesto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(value) {
    this._nombre = value;
  }
  set impuesto(impuesto) {
    this._impuesto = impuesto;
  }
  calcularImpuesto() {
    if (!this._impuesto) {
      throw new Error('No se ha asignado un impuesto al cliente.');
    }
    const {
      montoBrutoAnual,
      deducciones
    } = this._impuesto;
    return (montoBrutoAnual - deducciones) * 0.21;
  }
}
exports.default = Cliente;