import { Canal } from "./Canal";
import { Aplicación } from "./Aplicacion";
import { Empresa } from "./Empresa";
export class Plataforma
{
	nombre: string;
	logo: string;
	descripcion: string;
	Aplicación: Aplicación;
	canales: Array<Canal>;
	empresa: Empresa;
	
	constructor(nombre:string,logo:string,descripcion:string,canales:Canal,empresa:Empresa){
        this.nombre = nombre
        this.logo = logo
		this.descripcion=descripcion
		this.canales=[]
		this.empresa = empresa
	}

	agregarcanal(nombre:string, logo: string, descripcion: string) {
		this.canales.push ()
	}
}