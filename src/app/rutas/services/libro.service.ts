import { LibrosComponent } from './../libros/libros.component';
import { EventEmitter, Injectable } from '@angular/core';
import { Libro } from '../clases/libro.model';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  libros: Libro[] = [
    new Libro('el principito','Perez'), 
    new Libro('hola', 'Juarez'),
    new Libro('era hace una vez', 'Lara'),
    new Libro('Marca', 'Regisrada')
  ];

  saludar = new EventEmitter<number>();
   
  constructor() { }

  agregarLibro(libro:Libro){
    this.libros.push(libro);
  }

  encontrarLibro(index:number){
    let libro: Libro = this.libros[index];
    return libro;

  }

  modificarLibro(index:number,libro:Libro){
    let libro1 = this.libros[index];
    libro1.nombre = libro.nombre;
    libro1.autor = libro.autor;
  }

  eliminarLlbro(index:number){
    this.libros.splice(index,1);   
  }

}
