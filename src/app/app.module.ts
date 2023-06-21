import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EscuelaComponent } from './escuela/escuela/escuela.components';
import { ivnComponent } from './escuela/IVN/IVN.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/Button';
import { OperasModule } from './escuela/formularios/operas/operas.module';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaComponent,
    ivnComponent,
    IricComponent,
    MenuComponent,
    SumarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    OperasModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }