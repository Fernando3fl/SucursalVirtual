import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-registro-empleador',
  templateUrl: './forms-registro-empleador.component.html',
  styleUrls: ['./forms-registro-empleador.component.css']
})
export class FormsRegistroEmpleadorComponent implements OnInit {

 boton:string="Siguiente Paso"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  mostrar1=true;
  mostrar2=false;
  mostrar3=false;
  mostrar4=false;
  mostrar5=false;
  mostrarYocultar(){
    if(this.mostrar1){
      this.mostrar1=false;
      this.mostrar2=true;

    }
    if(this.mostrar2){
      this.mostrar2=false;
      this.mostrar3=true;

    }
    if(this.mostrar3){
      this.mostrar3=false;
      this.mostrar4=true;

    }
    if(this.mostrar4){
      this.mostrar4=false;
      this.mostrar5=true;

    }
}
}