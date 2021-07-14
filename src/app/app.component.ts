import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './autenticacion/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bonsai';

  constructor(private loginService: LoginService){}

  ngOnInit() {
    firebase.default.initializeApp({
      apiKey: 'AIzaSyDnjb4S8uz-lctykoXCj_NPcYjDAHWE2OQ',
      authDomain: 'listado-libros-9ccfb.firebaseapp.com',
    });
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
