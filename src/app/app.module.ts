
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './components/basico/personas/personas.component';
import { PersonaComponent } from './components/basico/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './components/basico/calculadora/calculadora.component';
import { ListadoPersonasComponent } from './components/directivas/listado-personas/listado-personas.component';
import { CarroComponent } from './comunicacion/input/carro/carro.component';
import { CarrosComponent } from './comunicacion/input/carros/carros.component';
import { FormularioComponent } from './comunicacion/input/formulario/formulario.component';
import { FormComponent } from './calculadoraModular/form/form.component';
import { VistaComponent } from './calculadoraModular/vista/vista.component';
import { ResultadoComponent } from './calculadoraModular/resultado/resultado.component';
import { VistaPresupuestoComponent } from './presupuesto/vista-presupuesto/vista-presupuesto.component';
import { HeaderComponent } from './presupuesto/header/header.component';
import { FormpComponent } from './presupuesto/formp/formp.component';
import { IngresosComponent } from './presupuesto/ingresos/ingresos.component';
import { EgresosComponent } from './presupuesto/egresos/egresos.component';
import { LibrosComponent } from './rutas/libros/libros.component';
import { FormlComponent } from './rutas/libros/forml/forml.component';
import { LibroComponent } from './rutas/libros/libro/libro.component';
import { ErrorComponent } from './rutas/error/error.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    CalculadoraComponent,
    ListadoPersonasComponent,
    CarroComponent,
    CarrosComponent,
    FormularioComponent,
    FormComponent,
    VistaComponent,
    ResultadoComponent,
    VistaPresupuestoComponent,
    HeaderComponent,
    FormpComponent,
    IngresosComponent,
    EgresosComponent,
    LibrosComponent,
    FormlComponent,
    LibroComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
