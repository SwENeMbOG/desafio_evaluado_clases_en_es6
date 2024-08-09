import Impuestos from './Impuestos.js';

export default class Cliente {
    constructor(nombre, impuesto = null) {
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
        const { montoBrutoAnual, deducciones } = this._impuesto;
        return (montoBrutoAnual - deducciones) * 0.21;
    }
}
