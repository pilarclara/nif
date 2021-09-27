class NIF{
    constructor(numDNI){
        this._numeroDNI = numDNI;
        this._letra = this.calculaLetra();
    }
    get numeroDNI(){
        return this._numeroDNI;
    }
    get letra(){
        return this._letra;
    }
    set numeroDNI(numDNI){
        this._numeroDNI = numDNI;
        this._letra = this.calculaLetra();
    }
    calculaLetra(){
        const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        return letras[this._numeroDNI%23];
    }
    mostrar(){
        let cad = this._numeroDNI.toString();
        while (cad.length<8){ cad = '0'+cad}
        return `${cad}-${this._letra}`;
    }
}

/*class Empleado{
    constructor(NIF, sueldoBase, pagoXhExtra, horasExtraMes, tipoPorcentajeIRPF, casado, NumeroHijos){
        this._NIF = NIF;
        this._sueldoBase = sueldoBase;
        this._pagoXhExtra = pagoXhExtra;
        this._horasExtraMes = horasExtraMes; 
        this._tipoPorcentajeIRPF = tipoPorcentajeIRPF;
        this._casado = casado;
        this._NumeroHijos = NumeroHijos;
    }    
}
*/
let numDNI = parseInt(prompt("Entre número de DNI"));
console.log(numDNI);
let dniEjemplo = new NIF(numDNI);
console.log(dniEjemplo.mostrar());

dniEjemplo.numeroDNI = 8798299;

console.log(dniEjemplo.mostrar());

