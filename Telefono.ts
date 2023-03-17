export class Telefono {
    private Tipo : string;
    private numero: number;

    //Constructor
    constructor(tipo: string, numero: number){
        this.Tipo = tipo;
        this.numero = numero;
    }

    //Getter
    public getTipo(): string {
        return this.Tipo;
    }
    public getNumero(): number {
        return this.numero;
    }
    //Setter
    public setTipo(value: string){
        this.Tipo = value;
    }
    public setNumero(value: number){
        this.numero = value;
    }
}