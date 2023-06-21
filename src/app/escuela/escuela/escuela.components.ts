import { Component } from '@angular/core';

@Component({
  selector: 'app-escuela',
  template:`
  <form>
    <label>Nombre:</label>
    <input type="text"value="">
    ,<button class="btn btn-primay">Ingresar</button>
  </form>
  `
})
export class EscuelaComponent {
  constructor(){}
}