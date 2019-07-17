import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app.routing';
import { UserServiceService } from '../user-service.service';
// import { from } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public formData : Object = {};
  public userForm : FormGroup;
  constructor(private userFM : FormBuilder, private userService : UserServiceService, private router: Router) { 
    this.userForm = userFM.group({
      userId : null,
      userName : null,
      userPassword : null,
      firstName : null,
      lastName : null,
      adress : null,
      contact : null,
    })
  }
  
  saveNewUser(){
    console.log(this.userForm.value);
    this.userService.saveUser(this.userForm.value).subscribe((data)=>{
      if(data){
        this.router.navigateByUrl('userList');
      }
    });
  }

  goBack(){
      this.router.navigateByUrl('home');
  }


  ngOnInit() {
  }

}
