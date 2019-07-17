import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app.routing';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public UserList = [];

  addUser(){
    this.router.navigateByUrl('createUser');
  }

  constructor(private userService : UserServiceService, private router: Router) { }

  ngOnInit() {

    this.userService.getUser().subscribe((userData)=>{
      this.UserList = userData;
    })
  }

}
