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

  constructor(private userService : UserServiceService, private router: Router) { }

  addUser(){
    this.router.navigateByUrl('createUser');
  }
  updateUser(user){
    this.userService.setFormData(user);
    this.router.navigateByUrl('updateUser');
  }
  viewUser(user){
    this.userService.setFormData(user);
    this.router.navigateByUrl('viewUser');
  }
  deleteUser(id, user){
    this.userService.deleteUser(user).subscribe((data)=>{
      if(data.success){
          this.UserList.splice(id,1);
      }
    })
    
  }

  

  ngOnInit() {

    this.userService.getUser().subscribe((userData)=>{
      this.UserList = userData;
    })
  }

}
