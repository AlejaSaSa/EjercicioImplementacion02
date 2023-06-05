import { Plataforma } from "./Plataforma";
import { Streamer } from "./Streamer";
import { Stream } from "./Stream";
import { Canal } from "./Canal";
import { Empresa } from "./Empresa";
import { Audiencia } from "./Audiencia";
import { Categoria } from "./Categoria";

export class Aplicación
{
   
	nombre: string;
	plataforma: Array<Plataforma>;
	
    constructor(nombre:string){
        this.nombre = nombre
        this.plataforma = []
    
        }
        agregarplataforma(nombre: string, logo: string, descripcion: string){
           this.plataforma.push ()
        }
		
}
const aplicacion:Aplicación = new Aplicación("Aqui y ahora")

const empresa: Empresa = new Empresa("tik tok S.A", 1234)
const empresa1:Empresa = new Empresa("Youtube S.A", 5462)
const empresa2:Empresa = new Empresa("Facebook S.A", 3423)
const empresa3:Empresa = new Empresa("Twitch S.A", 1334)
const empresa4:Empresa = new Empresa("Trovo S.A", 8976)

const categoria:Categoria = new Categoria("Juegos","streams de juegos","imagen")
const categoria1:Categoria = new Categoria("Rutinas","streams estilo blog diarios,o de rutinas","imagen")
const categoria2:Categoria = new Categoria("VARIOS","streams de varios temas ","imagen")

const canal:Canal = new Canal("oqueioquei","banner","Hola mi nombre es Iván,Tengo 24 años,Soy de México.",categoria)
const canal1:Canal = new Canal("Jose Covarrubias (Reytamalero)","banner","Streams TODOS LOS DÍAS!",categoria)
const canal2:Canal = new Canal("AlanaLaRana","banner","Hola! Me llamo Alana, tengo 21 años soy de Monterrey, México y me gusta hacer contenido de variedad :) bienvenid@ a las ranitas!!",categoria1)
const canal3:Canal = new Canal("MrTexTex","banner","Hola amikos, los que vienen de youtube ya me conocerán y los nuevos no estaremos viendo y conociendo en directo por aquí!! para que todos pasen un buen rato los amooo",categoria2)
const canal4:Canal= new Canal("Tessa_Y_Cruz","banner","Hola! Somos Tessa & Cruz, síguenos y diviértete con nosotros 🥰🍯✨Oaxaca, MX",categoria)
const canales = [canal,canal1,canal2,canal3,canal4]


const plataforma:Plataforma = new Plataforma("tiktok","logo","Aplicacion para ver contenido y realizar streams",canal,empresa)
const plataforma1:Plataforma = new Plataforma("youtube","logo","Aplicacion con varias funciones como streaming",canal1,empresa1)
const plataforma2:Plataforma = new Plataforma("Facebook live","logo","Permite a creadores de contenido hacer streams",canal2,empresa2)
const plataforma3:Plataforma = new Plataforma("Twitch","logo","Pagina especialmente para transmitir videos o lives",canal3,empresa3)
const plataforma4:Plataforma = new Plataforma("Trovo","logo","Permite realizar transmisiones sobre juegos",canal4,empresa4)
const plataformas=[plataforma,plataforma1,plataforma2,plataforma3,plataforma4]

const streamer:Streamer = new Streamer("Ivan","oqueioquei","streamer","avatar")
const streamer1:Streamer = new Streamer("Jose Covarrubias","Reytamalero","streamer","avatar")
const streamer2:Streamer = new Streamer("Alana Flores","Alanalarana","streamer","avatar")
const streamer3:Streamer = new Streamer("Richar Texte","MrTexTex","streamer","avatar")
const streamer4:Streamer= new Streamer("Tessa y Cruz","Tessa_Y_Cruz","streamer","avatar")
const streamers=[streamer,streamer1,streamer2,streamer3,streamer4]

const stream:Stream = new Stream("Ruleta new?","imagen",canal)
const stream1:Stream = new Stream("Rumbo a leyenda!!","imagen",canal1)
const stream2:Stream = new Stream("IRL GYM ","imagen",canal2)
const stream3:Stream = new Stream("GTA ROLEPLAY? VENIIIIIIIII","imagen",canal3)
const stream4:Stream= new Stream("Solo vs Squad mamalon","imagen",canal4)
const streams=[stream,stream1,stream2,stream3,stream4]
console.log (streams)
console.log(stream2)

const persona:Audiencia= new Audiencia("Alejandra","Aleja",stream2)
const persona1:Audiencia= new Audiencia("Jose","Jose_2",stream3)

console.log (plataformas)
console.log (plataforma3)
console.log (canales)
console.log(canal2)
console.log (streamers)
console.log (streamer2)
console.log (streams)
console.log(stream2)
