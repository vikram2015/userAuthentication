import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // ngOnChanges(changes: SimpleChanges): void {
  //   // throw new Error("Method not implemented.");
  //   // console.log("======= event ===/======= "+$event);
  //   console.log("======= event ========== "+JSON.stringify(changes));
  // }

  formData = {};
  constructor(private auth : AuthService, private router: Router) { }

  // OnChanges(){
  //   // console.log("======= event ========== "+$event);
  // }
  onFileSelected(event){
    console.log("======= event ========== "+event);
    console.log("======= event ========== "+event.toString());
    console.log("======= event ========== "+JSON.stringify(event));
    console.log("======= event ========== "+event.target.files);
    console.log("======= event ========== "+event.target.files[0]);
    console.log("======= event ========== "+JSON.stringify(event.target.files[0]));
  }
  registerUser(){
    
    console.log("======= inside component ========== "+this.formData);
    // console.log("======= event ========== "+event);
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
