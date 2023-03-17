export class Direccion{
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigoPostal: number;
    private poblacion: string;
    private provincia: string;

    //Constructor
    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal: number, poblacion: string, provincia: string){
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;   
    }
    //Getter
    public getCalle(): string {
		return this.calle;
	}
	public getNumero(): number {
        return this.numero;
    }
    public getPiso(): number {
        return this.piso;
    }
    public getLetra(): string{
        return this.letra;
    }
    public getCodigoPostal(): number {
		return this.codigoPostal;
	}
	public getPoblacion(): string {
        return this.poblacion;
    }
    public getProvincia(): string {
        return this.provincia;
    }

    //Setter
    public setCalle(value: string) {
		return this.calle = value;
	}
    public setNumero(value: number) {
		return this.numero = value;
	}
    public setPiso(value: number) {
        return this.piso = value;
    }
    public setLetra(value: string) {
        return this.letra = value;
    }
    public setCodigoPostal(value: number) {
		return this.codigoPostal = value;
	}
    public setPoblacion(value: string) {
        return  this.poblacion = value;
    }
    public setProvincia(value: string) {
        return  this.provincia = value;
    }
}