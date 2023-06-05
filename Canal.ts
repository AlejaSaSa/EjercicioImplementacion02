import { Streamer } from "./Streamer";
import { Categoria } from "./Categoria";
import { Plataforma } from "./Plataforma";
import { Stream } from "./Stream";
export class Canal
{
    
	nombre: string;
	banner: string;
	descripcion: string;
	categoria: Array<Categoria>;
    streams: Array<Stream>;
	streamer: Array<Streamer>;
	
    constructor(nombre:string,banner:string,descripcion:string,categoria:Categoria){
    this.nombre = nombre
    this.banner = banner
    this.descripcion = descripcion
    this.categoria = []
	this.streams = []
    this.streamer = []

    }
	agregarstreamer(nombre: string, banner: string, descripcion: string){
       this.streamer.push ()
	}
    agregarcategoria(nombre: string, descripcion: string, image: string){
        this.categoria.push ()
     }
     agregarstream(nombre: string){
		this.streams.push ()

	} 
}