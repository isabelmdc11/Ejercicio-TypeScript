export class Mail{
    private Tipo : string;
    private direccion: string;

    //Constructor
    constructor(tipo: string, direccion: string){
        this.Tipo = tipo;
        this.direccion = direccion;
    }

    //Getter
    public getTipo(): string {
        return this.Tipo;
    }
    public getDireccion(): string {
        return this.direccion;
    }
    //Setter
    public setTipo(value: string){
        this.Tipo = value;
    }
    public setDireccion(value: string){
        this.direccion = value;
    }

}