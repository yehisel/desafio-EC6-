class Impuestos{
    constructor(monto_bruto_anual, deducciones){
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
        }

    get monto_bruto_anual(){
        return this._monto_bruto_anual;
    }
    set monto_bruto_anuald(new_monto_bruto_anual){
        this._id = new_monto_bruto_anual;
    }

    get deducciones(){
        return this._deducciones;
    }
    set nombre(new_deducciones){
        this._deducciones = new_deducciones;
    }
    
           
}

export default Impuestos;
