import { Persona } from "./Persona";
import { Stream } from "./Stream";
import { Redsocial } from "./Redsocial";
import { Canal } from "./Canal";
export class Streamer extends Persona
{
   
	descripcion: string;
	avatar: string;
	stream: Array <Stream>;
	canal: Array<Canal>;
	redessociales: Array<Redsocial>;
	
	constructor (nombre:string,nickname:string,descripcion:string,avatar:string){
		super(nombre,nickname)
		this.nombre= nombre
		this.nickname = nickname
		this.descripcion = descripcion
		this.avatar= avatar
		this.stream = []
		this.canal= []
		this.redessociales = []
		}
	
    agregarstream(nombre: string){
		this.stream.push ()
	}
    Agregarredsocial(nombre: string, username: string, link: string) {
		this.redessociales.push ()
	}
    agregarcanal(nombre: string, logo: string, descripcion: string) {
		this.canal.push ()
	}
}