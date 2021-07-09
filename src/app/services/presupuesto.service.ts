import { EventEmitter, Injectable } from '@angular/core';
import { Presupuesto } from '../presupuesto/model/presupuesto.model';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto: Presupuesto[] = [
    new Presupuesto('ing','salario',54), 
    new Presupuesto('egr','renta',156), 
    new Presupuesto('ing','ropa',545)
  ];

  presupuesto1 = new EventEmitter<Presupuesto[]>();


  constructor() { }

  agregarPresupuesto(presupuesto: Presupuesto){
    this.presupuesto.push(presupuesto);
    this.presupuesto1.emit(this.presupuesto);
    // console.log(this.presupuesto);    
  }
}
