import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono} from "./Telefono";

export class Persona{

    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanos: string;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: Direccion[];
    private mails: Mail[];
    private telefono: Telefono[];
    private notas: string;

    //Constructor
    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleanos: string, colorFavorito: string, sexo: string, direcciones: Direccion[], mails:Mail[], telefono: Telefono[], notas: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = [];
        this.mails = [];
        this.telefono = [];
        this.notas = notas;
    }

    //Getter
    public getNombre(): string {
		return this.nombre;
	}
	public getApellidos(): string {
        return this.apellidos;
    }
    public getEdad(): number {
        return this.edad;
    }
    public getDNI(): string {
		return this.dni;
	}
	public getCumpleano(): string {
        return this.cumpleanos;
    }
    public getColorFavorito(): string {
        return this.colorFavorito;
    }
    public getSexo(): string {
        return this.sexo;
    }
    public getDireccion():Direccion[] {
		return this.direcciones;
	}
	public getMail(): Mail[] {
        return this.mails;
    }
    public getTelefono(): Telefono[] {
		return this.telefono;
	}
	public getNotas(): string {
        return this.notas;
    }

    //Setter
    public setNombre(valueNombre: string) {
		return this.nombre = valueNombre;
	}
    public setApellidos(valueApellidos: string) {
		return this.apellidos = valueApellidos;
	}
    public setEdad(valueEdad: number) {
		return this.edad = valueEdad;
	}
    public setDNI(valueDNI: string) {
        return this.dni = valueDNI;
    }
    public setCumpleano(valueCumpleano: string) {
        return this.cumpleanos = valueCumpleano;
    }
    public setColorFavorito(valueColorFavorito: string) {
        return this.colorFavorito = valueColorFavorito;
    }
    public setSexo(valueSexo: string) {
        return this.sexo = valueSexo;
    }
    public setDireccion(valueDireccion: Direccion[]) {
        return this.direcciones = valueDireccion;
    }
    public setMail(valueMails: Mail[]) {
        return this.mails = valueMails;
    }
    public setTelefono(valueTelefono: Telefono[]){
        return this.telefono =valueTelefono;
    }
    
    public setNotas(valueNotas: string){
        return this.notas =valueNotas;
    }
    
    mostrarDatos(): void{
        console.log(this.getNombre(), this.getApellidos() + "Edad: " + this.getEdad()+ " Dni: " + this.getDNI() + " Cumpleaños:" + this.getCumpleano() + " Color Favorito:" + this.getColorFavorito() + "Sexo:" + this.getSexo(), this.getDireccion(), this.getMail(), this.getTelefono(), this.getNotas());
    }

    //Rellenar array de Direccion, Telefono y  Mail
    rellenarDireccion(cal: string, nu: number, pi: number, le: string, cp: number, po:string, pro:string): any {
        var r: any = new Direccion(cal, nu, pi, le, cp, po, pro);
        this.direcciones.push(r);
    }

    rellenarTelefono(a: string, b: number): any {
        var r: any = new Telefono(a, b);
        this.telefono.push(r);   
    }

    rellenarMail(a: string, b: string): any {
        var r: any = new Mail(a, b);
        this.mails.push(r);   
    }

    /* */
    cambiar(dire: any, tel: any, ma: any){

        //cambiar Direcciones
        dire[0].setCalle("Calle Torrecilla");
        dire[0].setNumero(15);
        dire[0].setPiso(2);
        dire[0].setLetra("M");
        dire[0].setCodigoPostal(25806);
        dire[0].setPoblacion("Barcelona");
        dire[0].setProvincia("Barcelona");

        //cambiar telefono
        tel[0].setTipo("movil fijo");
        tel[0].setNumero(927518252);
        //cambiar mail
        ma[0].setTipo["gmail"];
        ma[0].setDireccion["pepita@gmail.com"];
        
    }

}