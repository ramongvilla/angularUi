import { CarrosService } from './../../../services/carros.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../clases/carro.model';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit  {

  titulo = 'Listado de Personas';
  personas: Persona[] = [];
  
  constructor(private carrosService:CarrosService){}

  ngOnInit() {
    this.personas = this.carrosService.personas;
  }

  personaAgregada(persona:Persona){
    // this.personas.push(persona);
    this.carrosService.agregarPersona(persona);
  }
  // nombreInput:string = '';
  // apellidoInput:string = '';

  // agregarPersona(){
  //   let persona1 = new Persona(this.nombreInput, this.apellidoInput);
  //   this.personas.push( persona1 );
  // }

}
