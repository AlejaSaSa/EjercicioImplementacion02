import { Persona } from "./Persona";
import { Stream } from "./Stream";
export class Audiencia extends Persona
{

	Seguidor: boolean;
	stream: Stream;
	
	constructor(nombre:string,nickname:string, stream: Stream){
		super(nombre,nickname)
		this.nombre = nombre
        this.nickname = nickname
		this.stream= stream
  }
}
