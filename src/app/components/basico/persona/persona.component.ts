import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {
  

  nombre: string = "juan";
  apellido: string = "jose";
  // private edad: number = 36;
   edad: number = 36;


  // //metodo en html
  // getEdad(): number{
  //   return this.edad;
  // }

}
