import { Persona } from './Persona';

//Los Registros de Persona
var persona1 = new Persona(" Laura " , " Hernandez " , 28 , " 28796071M " , " 10-2-91 " , " lila"  , " S " , [], [], [], " Ut enim ad minim veniam.");
var persona2 = new Persona(" Pedro " , " Villalba "  , 39 , " 3521540L " , " 21-9-98 " , " gris " , " P " , [], [], [], " Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
var persona3 = new Persona(" Belen " , " Bautista "  , 31 , " 34389617D " , " 7-12-92 " , " rosa " , " Q " , [], [], [], " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");


/** Rellenar Direccion, Telefono y Mail */
//Registro1
persona1.rellenarDireccion(" Calle Santiago ", 20, 2, " D ", 1357, " Llerena ", " Badajoz ");
persona1.rellenarTelefono(" movil Fijo ", 928519242);
persona1.rellenarMail(" hotmail ", " laura@hotmail.com ");
//Registro2
persona2.rellenarDireccion(" Calle Aragon ", 16, 5, " A ", 7531, " Santa Maria ", " Badajoz ");
persona2.rellenarTelefono(" movil Fijo ", 927143282);
persona2.rellenarMail(" hotmal ", " pedro@hotmail.com ");
//Registro3
persona3.rellenarDireccion(" Calle San Marco ", 28, 1, " B ", 93752, " Calera "," Badajoz ");
persona3.rellenarTelefono(" movil fijo ", 926161268);
persona3.rellenarMail(" Outlook ", " rocio@Outlook.com ");

console.log("/** Mostrar Datos **/");

console.log('/** Persona 1: **/');
persona1.mostrarDatos();
console.log('/** Persona 2: **/');
persona2.mostrarDatos();
console.log('/** Persona 3: **/');
persona3.mostrarDatos();

console.log("");
console.log("");
console.log("/** Buscar DNI y Cambiar Direccion , Telefono y Mail **/");

var arraydni: any[] = [];

var result = function (a: any, b: any, c: any) {    //Añadir todos los DNI de las Tres personas para despues buscarlo
    arraydni.push(a);
    arraydni.push(b);
    arraydni.push(c);
}

result(persona1.getDNI(), persona2.getDNI(), persona3.getDNI());

console.log("Buscar DNI : 28796071M");

function buscarDni(datos: string): any {  //Buscar el DNI
    switch (datos) {
        case arraydni[0]:
            persona1.cambiar(persona1.getDireccion(), persona1.getTelefono(), persona1.getMail());
            persona1.mostrarDatos();
            break;
        case arraydni[1]:
            persona2.cambiar(persona2.getDireccion(), persona2.getTelefono(), persona2.getMail());
            persona2.mostrarDatos();
            break;
        case arraydni[2]:
            persona3.cambiar(persona3.getDireccion(), persona3.getTelefono(), persona3.getMail());
            persona3.mostrarDatos();
            break;
        default:
            console.log("No se encuentra el DNI que se busca ");
            break;
    }
}

buscarDni('28796071M');


