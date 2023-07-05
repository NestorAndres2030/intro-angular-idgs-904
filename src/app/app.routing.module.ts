import { Router, RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { IricComponent } from "./escuela/iric/iric.component";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";
import { ivnComponent } from "./escuela/IVN/IVN.component";



const rutes:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'Iric',component:IricComponent},
    {path:'Alumno',component:AlumnoReactiveComponent},
    {path:'IVN',component:ivnComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(rutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}







