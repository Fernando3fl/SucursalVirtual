import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asegurado',
  templateUrl: './asegurado.component.html',
  styleUrls: ['./asegurado.component.css']
})
export class AseguradoComponent implements OnInit {
  tipo:string="Asegurado";
  constructor() { }

  ngOnInit(): void {
  }

}
