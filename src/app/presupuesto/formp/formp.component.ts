import { EgresosService } from './../services/egresos.service';
import { IngresosService } from './../services/ingresos.service';
import { Presupuesto } from './../model/presupuesto.model';
import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Ingreso } from '../model/ingresos.model';
import { Egreso } from '../model/egresos.model';

@Component({
  selector: 'app-formp',
  templateUrl: './formp.component.html',
  styleUrls: ['./formp.component.scss'],
})
export class FormpComponent implements OnInit {
  tipo: string = 'ing';
  descripcionInput:string;
  valorInput:number;

    constructor(private ingresoService: IngresosService,
                private egresoService:EgresosService) {}

  ngOnInit(): void {}

  tipoOperacion(evento:any) {
    this.tipo=evento.target.value;
  }
  agregarValor(){
    if (this.tipo === "ing") {
      this.ingresoService.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput));
    } else {
      this.egresoService.egresos.push(new Egreso(this.descripcionInput,this.valorInput));
    }

  }
}
