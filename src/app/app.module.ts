import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { AseguradoComponent } from './asegurado/asegurado.component';
import { EmpleadorComponent } from './empleador/empleador.component';
import { LoginComponent } from './login/login.component';
import { FormsRegistroSIPComponent } from './forms-registro-sip/forms-registro-sip.component';
import { NavbarEmpleadorComponent } from './navbar-empleador/navbar-empleador.component';
import { FormsRegistroEmpleadorComponent } from './forms-registro-empleador/forms-registro-empleador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AseguradoComponent,
    EmpleadorComponent,
    LoginComponent,
    FormsRegistroSIPComponent,
    NavbarEmpleadorComponent,
    FormsRegistroEmpleadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
