class PilaEnteros{
private vec:number[]=[];
insertar(x:number){
    this.vec.push(x);
}    
extraer(){
    if(this.vec.length>0)
    return this.vec.pop();
    else
    return null;
    }   
}


class PilaStrings{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }    
    extraer(){
        if(this.vec.length>0)
        return this.vec.pop();
        else
        return null;
        }   
    }
    
let pila1=new PilaEnteros();
pila1.insertar(34);
pila1.insertar(29);
pila1.insertar(3);
console.log(pila1.extraer());

    //Cadenas

    
let pila2=new PilaStrings();
pila2.insertar('32');
pila2.insertar('31');
pila2.insertar('3');
console.log(pila2.extraer());


//Clases  genericas 

class PilaGenerica<T>{
    private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }    
    extraer(){
        if(this.vec.length>0)
        return this.vec.pop();
        else
        return null;
        }   
    }

let pila3=new PilaGenerica<number>();
pila3.insertar(32);
pila3.insertar(31);
pila3.insertar(3);
console.log(pila2.extraer());
    

let pila4=new PilaGenerica<string>();
pila4.insertar('32');
pila4.insertar('31');
pila4.insertar('3');
console.log(pila2.extraer());
    
