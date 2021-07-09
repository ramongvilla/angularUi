import { Injectable } from '@angular/core';
import { Ingreso } from '../model/ingresos.model';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  ingresos: Ingreso[]=[
    new Ingreso("salario",2154),
    new Ingreso("Venta de coche",51174)
  ];

  eliminar(ingreso:Ingreso){
    const indice:number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1);
  }
}
