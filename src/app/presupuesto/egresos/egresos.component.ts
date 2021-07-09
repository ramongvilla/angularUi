import { EgresosService } from './../services/egresos.service';
import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from '../model/egresos.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.scss']
})
export class EgresosComponent implements OnInit {

  @Input() ingresoTotal:number;
  egresos:Egreso[]=[];
  
  constructor(private egresosService:EgresosService) { }

  ngOnInit(): void {
    this.egresos = this.egresosService.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresosService.eliminar(egreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
