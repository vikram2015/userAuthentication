import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient, private newhttp : Http, private router : Router) { }

  newUser;
  registerUser(parameter){
    return this.http.post('register/registerUser',parameter);
  }

  loginUser(user){
    return this.newhttp.post('login/loginUser',user).map((user)=>{
      let newUser = user.json();
      console.log('----------- newUser -========= '+JSON.stringify(newUser));
      if(newUser.success){
        return newUser;
      }
    })
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(logout){
    console.log('------- inside the authservice logout function ====== '+JSON.stringify(logout));
    
    return this.newhttp.post('/login/logoutUser',logout).map((result)=>{
      let newUser = result.json();
      console.log('----------- logout response from backend -========= '+JSON.stringify(newUser));
      if(newUser.success){
        return newUser;
      }
    })

  }

}
