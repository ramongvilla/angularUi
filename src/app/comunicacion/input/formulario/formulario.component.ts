import { Component, EventEmitter, Output } from '@angular/core';
import { CarrosService } from 'src/app/services/carros.service';
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

  constructor(private carrService: CarrosService){
    this.carrService.saludar.subscribe(
      (indice:number) => alert("el nombre es: "+indice)
    );
  }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    // this.personas.push( persona1 );
    this.personaCreada.emit(persona1);
  }

}
