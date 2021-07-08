import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../clases/carro.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  
  @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    // this.personas.push( persona1 );
    this.personaCreada.emit(persona1);
  }

}
