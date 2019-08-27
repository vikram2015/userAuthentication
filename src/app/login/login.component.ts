import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = {};
  constructor(private auth : AuthService, private router : Router) { }

  login(){
    this.auth.loginUser(this.formData).subscribe((status)=>{
      console.log('=========user   '+status);
      if(status.success == true){
        localStorage.setItem('token',status.token);
        this.router.navigateByUrl('home');
      }
    });
  }
  

  ngOnInit() {
  }

}
