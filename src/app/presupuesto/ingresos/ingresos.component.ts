import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../model/ingresos.model';
import { IngresosService } from '../services/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {

  ingresos: Ingreso[]=[];

  constructor(private ingtesoService: IngresosService) {}

  ngOnInit(): void {
  this.ingresos = this.ingtesoService.ingresos;
  }

  eliminarRegistro(ingreso:Ingreso){
    this.ingtesoService.eliminar(ingreso);

  }

}
