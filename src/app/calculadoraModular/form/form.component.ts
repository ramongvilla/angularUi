import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  
  @Output() resultadoSuma = new EventEmitter<number>();


  operandoA: number = 0;
  operandoB: number = 0;

  sumar() {
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }
}
