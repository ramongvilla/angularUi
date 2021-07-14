import { User } from './../interface/user';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;
  constructor(private router: Router) { }

  login(user:User){
    firebase.default.auth().signInWithEmailAndPassword(user.email,user.password).
    then(
      res =>{
        firebase.default.auth().currentUser?.getIdToken().then(
          token=> {
            this.token=token;
            console.log('token',token);
            
            this.router.navigate(['/']);
          }
        )
      }
    )

  }
  getIdToken(){
    return this.token; 
  }

  isAutenticado(){
    return this.token != null;
  }

  logout(){
    firebase.default.auth().signOut().then(()=>{
      this.token = '';
      this.router.navigate(['login']);
    }).catch(error => console.log('error logout:',error));
    
  }

}
