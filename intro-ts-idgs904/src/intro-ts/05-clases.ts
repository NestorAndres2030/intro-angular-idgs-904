

class Persona2{
    nombre:string='2';
    edad:number=2;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre:${this.nombre} y Edad: ${this.edad}`)
    }
}

let persona:Persona2;
persona=new Persona2('Juan',23)
persona.imprimir();

class Dado{
    private valor:number=0;
    public tirar(){
      this.generar();
    }
    private generar(){
      this.valor=Math.floor(Math.random()*6)+1;
  
    }
    public imprimir(){
      console.log(`Valor: ${this.valor}`)
    }
  }
  let dado1 = new Dado();
  dado1.tirar();
  dado1.imprimir();


// Clase 2 se hace directamente desde del contrusctor 

class Persona3{
    constructor(public nombre:string,public edad:number){}
    imprimir(){
        console.log(`Nombre:${this.nombre} y Edad:${this.edad}`)
    }
}
let persona3:Persona3;
persona3=new Persona3('Juan',43);
persona3.imprimir();








