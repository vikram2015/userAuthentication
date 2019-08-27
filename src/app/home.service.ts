import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/pipe';

@Injectable()
export class HomeService {

  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get('/user/getUserList').map( (userList : Response)=> {
      console.log("----------- home service ------- "+JSON.stringify(userList));
      let newUserList = JSON.stringify(userList);
      let temp = JSON.parse(newUserList)
      // let newUserList = userList;
      // let newUserList = userList.json();
      //  let newUserList = userList.toString();
      if (temp && temp.success) {
        return temp.getAllUser;
      }
    });
  };

}
