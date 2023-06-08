
function sumar(a,b):void{
    console.log(a+b)
}

const resultado=sumar(5,3)

function suma2(n1:number,n2:number):number{
return n1+n2;

}

console.log(suma2(5,6))
function multlipicar(n3:number,n4:number,n5:number):number{
    let tem=n3*n4
    return tem
}

console.log(multlipicar(3,5,3))

interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function datosMascota(mascota:Mascotas,x:number):void{
    mascota.edad+=x
    console.log(mascota)
   
}

const nuevaMascota:Mascotas={
    nombre: "",
    edad: 0,
    mostrarEdad: function (): void {
       console.log('La edad es :',this.edad)
    }
}
datosMascota(nuevaMascota,32)


let funSuma = function(n1:number,n2:number):number{
    return n1+n2
}

console.log(funSuma(6,5))


function suma3(...valores:number[]){
    let suma=0
    for(let x=0; x<valores.length;x++)
    suma+=valores[x];

    return suma
}


console.log(suma3(4,7,3,3))
console.log(suma3(4,5))





