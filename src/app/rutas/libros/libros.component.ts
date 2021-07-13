import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../clases/libro.model';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  titulo = 'Listado de Libros';
  libros: Libro[] = [];

  constructor(private libroService: LibroService,
              private router:Router) { }

  ngOnInit(): void {
    this.libros=this.libroService.libros;
  }

  // libroAgregado(libro:Libro){
  //   // this.personas.push(persona);
  //   this.libroService.agregarLibro(libro);
  // }

  agregar(){
    this.router.navigate(['libros/agregar']);
  }

}
