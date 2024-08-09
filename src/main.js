import Cliente from './Cliente.js';
import Impuestos from './Impuestos.js';

const impuestos = new Impuestos(100000, 20000);
const cliente = new Cliente('Juan', impuestos);

const impuestoAPagar = cliente.calcularImpuesto();
console.log(`El impuesto a pagar por ${cliente.nombre} es: $${impuestoAPagar}`);
