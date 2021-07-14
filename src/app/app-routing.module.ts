import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { ErrorComponent } from './rutas/error/error.component';
import { LoginGuard } from './rutas/guards/login.guard';
import { FormlComponent } from './rutas/libros/forml/forml.component';
import { LibrosComponent } from './rutas/libros/libros.component';


const routes: Routes = [
  { path: '', component: LibrosComponent,canActivate:[LoginGuard] },

  //rutas
  // {path:'libros', component: LibrosComponent},
  // {path:'libros/:id', component: FormlComponent}
  // {path:'libros/agregar', component: FormlComponent},

  // Child Route
  {
    path: 'libros',
    component: LibrosComponent,
    canActivate:[LoginGuard], //protegiendo las rutas  
    children: [
      { path: 'agregar', component: FormlComponent },
      { path: ':id', component: FormlComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LibrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
