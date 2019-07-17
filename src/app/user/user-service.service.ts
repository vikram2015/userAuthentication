import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UserServiceService {

  constructor(private http : Http) { }

  saveUser(parameter){
    return this.http.post('/user/saveNewUser', parameter).map(function (data) {
      console.log(data);
      let newData = data.json();
      if (newData) {
        return newData;
      }
    });
  };

  getUser(){
    return this.http.get('/user/getUserList').map(function (userList) {
      console.log(userList);
      let newUserList = userList.json();
      if (newUserList && newUserList.success) {
        return newUserList.getAllUser;
      }
    });
  };
};
