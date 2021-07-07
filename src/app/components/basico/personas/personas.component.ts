import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = ''; //no se ha agregado nada';
  titulo = '';
  mostrar = false;

  // Property Binding
  agregarPersona() {
    this.mostrar= true;
    this.mensaje = 'Persona agregada';
  }

  // // Event Binding
  // modificarTitulo(event: Event) {
  //   this.titulo = (<HTMLInputElement>event.target).value;
  // }
}
