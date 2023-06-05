import { Audiencia } from "./Audiencia";
import { Streamer } from "./Streamer";
import { Canal } from "./Canal";
export class Stream
{
    
	nombre: string;
	imagen: string;
    canal: Canal;
	streamer: Array<Streamer>;
	persona: Array<Audiencia>;
	
	constructor(nombre:string,imagen:string,canal:Canal){
        this.nombre = nombre
        this.imagen = imagen
		this.canal= canal
		this.streamer = []
		this.persona = []
    }
}