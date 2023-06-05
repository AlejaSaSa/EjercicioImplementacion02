import { Streamer } from "./Streamer";
export class Redsocial
{
    
	nombre: string;
	username: string;
	link: string;
	streamer: Streamer;
	
	constructor(nombre:string,username:string,link:string){
        this.nombre = nombre
        this.username = username
		this.link = link
    }
}
