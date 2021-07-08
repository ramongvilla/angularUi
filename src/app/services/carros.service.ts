import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../comunicacion/input/clases/carro.model';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  personas: Persona[] = [
    new Persona('Juan','Perez'), 
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
    new Persona('Marca', 'Regisrada')
  ];

  saludar = new EventEmitter<number>();
  
  constructor() { }

  agregarPersona(persona:Persona){
    this.personas.push(persona);
  }

}
