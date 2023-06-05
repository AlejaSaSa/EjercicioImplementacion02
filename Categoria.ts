import { Canal } from "./Canal";
export class Categoria
{
    
	nombre: string;
	descripcion: string;
	imagen: string;
	canal: Canal;
	
    constructor(nombre:string,descripcion:string,imagen:string){
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
    }
	
}