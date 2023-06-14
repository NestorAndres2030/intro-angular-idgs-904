import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EscuelaComponent } from './escuela/escuela/escuela.component';
import { ivnComponent } from './escuela/IVN/IVN.component';
import { IricComponent } from './escuela/iric/iric.component';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaComponent,
    ivnComponent,
    IricComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
