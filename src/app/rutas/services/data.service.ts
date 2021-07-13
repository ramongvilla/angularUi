import { Libro } from './../clases/libro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient: HttpClient) { }

  cargarLibros(){
    return this.HttpClient.get<Libro[]>('https://listado-libros-9ccfb-default-rtdb.firebaseio.com/datos.json');
  }

  //guardar libros

  guardarLibros(libros: Libro[]){
    //post modifica todo el arreglo
    // this.HttpClient.post('https://listado-libros-9ccfb-default-rtdb.firebaseio.com/datos.json', libros)
    this.HttpClient.put('https://listado-libros-9ccfb-default-rtdb.firebaseio.com/datos.json', libros)
    //put solo modifica el elemento agregado
    .subscribe(
      res=> console.log('resultado'+res),        
      error => console.log('error'+error )      
    );  
  }

  modificarLibro(index:number,libro:Libro){
    let url:string
    url = 'https://listado-libros-9ccfb-default-rtdb.firebaseio.com/datos/'+index+'.json';
    this.HttpClient.put(url,libro).
    subscribe(
      resp => console.log('resultado modificar libro',resp),
      error => console.log('error en modificar libro:',error)
            
    );

  }
  eliminarLibro(index:number){
    let url:string
    url = 'https://listado-libros-9ccfb-default-rtdb.firebaseio.com/datos/'+index+'.json';
    this.HttpClient.delete(url).
    subscribe(
      resp => console.log('resultado eliminar libro',resp),
      error => console.log('error en eliminar libro:',error)
            
    );

  }

}
