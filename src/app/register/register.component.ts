import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData = {};
  constructor(private auth : AuthService, private router: Router) { }

  registerUser(){
    console.log(this.formData);
    this.auth.registerUser(this.formData).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('login')
      },
      err => console.log(err)
    )
  }
  loginPage(){
    this.router.navigateByUrl('login');
  }

  ngOnInit() {
  }

}
