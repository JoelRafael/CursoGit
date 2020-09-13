export class Persona{
    nombre: string;
    apellido: string;
    edad: number;
    kilometros: number;

    caminar(){
        console.log('Estoy caminando' + this.kilometros);

    }
    constructor(cuantokilometro:number){
        this.kilometros=cuantokilometro;

    }
   
}