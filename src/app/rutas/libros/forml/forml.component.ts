import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../../clases/libro.model';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-forml',
  templateUrl: './forml.component.html',
  styleUrls: ['./forml.component.scss'],
})
export class FormlComponent implements OnInit {
  @Output() libroCreado = new EventEmitter<Libro>();

  nombreInput: string = '';
  autorInput: string = '';
  index: number;
  modEdicion: number;

  constructor(
    private libroService: LibroService,
    private router: Router,
    private rouute: ActivatedRoute
  ) {
    this.libroService.saludar.subscribe((indice: number) =>
      alert('el nombre es: ' + indice)
    );
  }

  ngOnInit() {
    this.index = this.rouute.snapshot.params['id'];
    this.modEdicion = +this.rouute.snapshot.queryParams['modEdicion'];
    //el mas es para convertir a tipo entero

    // trabajar con queryParams
    if (this.modEdicion != null && this.modEdicion === 1) {
      let libro: Libro = this.libroService.encontrarLibro(this.index);
      this.nombreInput = libro.nombre;
      this.autorInput = libro.autor;
    }

    // // trabajar con indice
    //   if (this.index) {
    //     let libro:Libro = this.libroService.encontrarLibro(this.index);
    //      this.nombreInput = libro.nombre;
    //      this.autorInput = libro.autor;
    //    }
  }

  agregarLibro() {
    let libro1 = new Libro(this.nombreInput, this.autorInput);
    // if (this.index) { trabajar con indice
    if (this.modEdicion != null && this.modEdicion === 1) { //trabajar con queryParams
      this.libroService.modificarLibro(this.index, libro1);
    } else {
      this.libroService.agregarLibro(libro1);
    }

    // this.personas.push( persona1 );
    // this.libroCreado.emit(libro1);

    this.router.navigate(['libros']);
    console.log(libro1);
  }

  eliminarLibro() {
    if (this.index != null) {
      this.libroService.eliminarLlbro(this.index);
    }
    this.router.navigate(['libros']);
  }
}
