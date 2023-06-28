import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { OperaBasComponent } from '../opera-bas/opera-bas.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    OperaBasComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
 
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  exports:[
    OperaBasComponent
  ]
})
export class OperasModule { }
