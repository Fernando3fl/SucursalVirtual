import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    titulo:string="Gestora Publica";
  
    constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irFRSIP(){
 this.router.navigate(['formsRegistroSIP']);

  }
}
