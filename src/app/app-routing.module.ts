import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AseguradoComponent} from './asegurado/asegurado.component';
import {EmpleadorComponent} from './empleador/empleador.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import {FormsRegistroSIPComponent} from './forms-registro-sip/forms-registro-sip.component';
import { FormsRegistroEmpleadorComponent } from './forms-registro-empleador/forms-registro-empleador.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'index',component: InicioComponent},
  {path:'login',component: LoginComponent},
  {path:'asegurado',component: AseguradoComponent},
  {path:'empleador',component: EmpleadorComponent},
  {path:'formsRegistroSIP',component: FormsRegistroSIPComponent },
  {path: 'formsRegistroEmpleador',component: FormsRegistroEmpleadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
