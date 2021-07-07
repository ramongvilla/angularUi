import { Component} from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.scss']
})
export class ListadoPersonasComponent  {

  titulo = 'Listado de Personas';
  personas: Persona[]=[new Persona ('jian','perez'),new Persona('asdfs','sd')];
  nombreInput:string = "";
  apellidoInput:string = "";

  agregarPersonas(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    this.personas.push(persona1)
  }

}
