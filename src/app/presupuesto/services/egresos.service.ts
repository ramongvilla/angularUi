import { Injectable } from '@angular/core';
import { Egreso } from '../model/egresos.model';

@Injectable({
  providedIn: 'root'
})
export class EgresosService {
  egresos: Egreso[]=[
    new Egreso("renta",3260),
    new Egreso("chocomilik",1510)
  ];
  eliminar(egreso:Egreso){
    const indice:number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1);
  }
}
