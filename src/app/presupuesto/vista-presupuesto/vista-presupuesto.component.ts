import { EgresosService } from './../services/egresos.service';
import { IngresosService } from './../services/ingresos.service';
import { Component, OnInit } from '@angular/core';
import { Egreso } from '../model/egresos.model';
import { Ingreso } from '../model/ingresos.model';

@Component({
  selector: 'app-vista-presupuesto',
  templateUrl: './vista-presupuesto.component.html',
  styleUrls: ['./vista-presupuesto.component.scss']
})
export class VistaPresupuestoComponent implements OnInit {

  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private ingresosService: IngresosService,
              private egresosService:EgresosService) {
                this.ingresos= ingresosService.ingresos;
                this.egresos = egresosService.egresos;
               }

  getIngresoTotal(){
    let ingresoTotal:number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor; 
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor; 
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

  ngOnInit(): void {
  }

}
