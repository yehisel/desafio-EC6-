class Clientes{
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
        }

    get nombre(){
        return this._nombre;
    }
    set nombred(new_nombre){
        this._id = new_nombre;
    }

    get impuesto(){
        return this._impuesto;
    }
    set nombre(new_impuesto){
        this._impuesto = new_impuesto;
    }

   
    calcular_impuesto(){
        return this._impuesto.monto_bruto_anual - this._impuesto.deducciones * 0.21;
    }
        
}

export default Clientes;
