import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  templateUrl: './opera-bas.component.html',
  styleUrls: ['./opera-bas.component.css']
})
export class OperaBasComponent {
  num1!:number;
  num2!:number;

  resultado!:number;
  operacionSeleccionada:string="suma";
  tipoOperaciones=[
    'suma',
    'resta',
    'multiplicacion',
    'divicion',
  ];
  calcular(){
    switch(this.operacionSeleccionada){
      case'suma':this.resultado=this.num1+this.num2;
      break;
    }
  }
}
