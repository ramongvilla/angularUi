import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss'],
})
export class VistaComponent implements OnInit {
  titulo = 'calculadora Modular';
  resultadoPadre: number = 0;

  resultadoCalculado(resultado: number) {
    // console.log(persona);

    this.resultadoPadre = resultado;
  }

  constructor() {}

  ngOnInit(): void {}
}
