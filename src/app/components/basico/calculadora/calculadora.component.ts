import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  titulo:string = "Aplicacion Calculadora";  
  operandoA:number = 0;
  operandoB:number = 0;
  resultado:number = 0;


  sumar(){
    this.resultado = this.operandoA +this.operandoB;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
