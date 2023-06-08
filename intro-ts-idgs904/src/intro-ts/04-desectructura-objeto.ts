interface Alumnos1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}


interface Grupo{
    grupo:string;
    year:number;

}

const alumno2:Alumnos1={
    matricula1:324234,
    nombre:'Mario',
    edad:23,
    correo:'nestor@gmial.com',
    grupo:{
        grupo:'idgs',
        year:2023
    }

}

const {matricula1,grupo:xx}=alumno2
const{grupo}=xx
console.log(`La matricula es:${matricula1}`)
console.log(`La Nombre es:${alumno2.nombre}`)
console.log(`La Grupo es:${alumno2.grupo}`)
console.log(`La ano del Grupo es:${alumno2.grupo.year}`)

const gps:string[]=['IDGS','IENV','REDES'];
console.log(`Grupo 1 :${gps[0]}`)
console.log(`Grupo 2 :${gps[1]}`)
console.log(`Grupo 3 :${gps[3]}`)


const[a,b]=gps;
console.log(`grupo 1:${a}`)








