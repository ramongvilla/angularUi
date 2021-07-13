import { LibrosComponent } from './../libros/libros.component';
import { EventEmitter, Injectable } from '@angular/core';
import { Libro } from '../clases/libro.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  // libros: Libro[] = [
  //   new Libro('el principito','Perez'),
  //   new Libro('hola', 'Juarez'),
  //   new Libro('era hace una vez', 'Lara'),
  //   new Libro('Marca', 'Regisrada')
  // ];
  libros: Libro[] = [];

  saludar = new EventEmitter<number>();

  constructor(private dataService: DataService) {}

  setLibros(libros: Libro[]) {
    this.libros = libros;
  }

  getLibtros() {
    return this.dataService.cargarLibros();
  }

  agregarLibro(libro: Libro) {
    if (this.libros == null) {
      this.libros = [];
    }

    this.libros.push(libro);
    this.dataService.guardarLibros(this.libros);
  }

  encontrarLibro(index: number) {
    let libro: Libro = this.libros[index];
    return libro;
  }

  modificarLibro(index: number, libro: Libro) {
    let libro1 = this.libros[index];
    libro1.nombre = libro.nombre;
    libro1.autor = libro.autor;

    //modificar con firebase
    this.dataService.modificarLibro(index,libro);
  }

  eliminarLlbro(index: number) {
    //eliminar arreglo
    this.libros.splice(index, 1);

    //eliminar firebase
    this.dataService.eliminarLibro(index);
    //se vuelvle a cargar el arreglo mover los indices
    this.modificarLibros();
     
  }

  modificarLibros(){
    if (this.libros != null) {
      this.dataService.guardarLibros(this.libros); 
      
    }
  }
}
