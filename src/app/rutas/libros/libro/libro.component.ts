import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../../clases/libro.model';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  @Input() libro: Libro;
  @Input() indice: number;
  
  constructor( private libroService: LibroService ) { }

  emitirSaludo(){
    this.libroService.saludar.emit(this.indice);
  
  }
  
  ngOnInit(): void {
  }
  
  
  
}

