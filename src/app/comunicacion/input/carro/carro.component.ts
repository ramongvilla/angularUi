import { Component, Input, OnInit } from '@angular/core';
import { CarrosService } from 'src/app/services/carros.service';
import { Persona } from '../clases/carro.model';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent  {

  @Input() persona: Persona;
  @Input() indice: number;
  
  constructor( private carrService: CarrosService) { }
  
  ngOnInit(): void {
  }
  
  emitirSaludo(){
    this.carrService.saludar.emit(this.indice);
  
  }
  
}
