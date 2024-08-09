"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const impuestos = new _Impuestos.default(100000, 20000);
const cliente = new _Cliente.default('Juan', impuestos);
const impuestoAPagar = cliente.calcularImpuesto();
console.log("El impuesto a pagar por ".concat(cliente.nombre, " es: $").concat(impuestoAPagar));