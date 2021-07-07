import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './components/basico/personas/personas.component';
import { PersonaComponent } from './components/basico/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './components/basico/calculadora/calculadora.component';
import { ListadoPersonasComponent } from './components/directivas/listado-personas/listado-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    CalculadoraComponent,
    ListadoPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
