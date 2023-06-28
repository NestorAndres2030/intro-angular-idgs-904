import { Pipe, PipeTransform } from '@angular/core';
import { alumnosIric } from './alumnos';

@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value:alumnosIric[],args: string):alumnosIric[] {
    
    let filter:string=args?args.toLocaleLowerCase():'';

    return filter ? value.filter((alumnos:alumnosIric)=>
    alumnos.nombre.toLocaleLowerCase().indexOf(filter)!=-1
    ):value;
  }

}
