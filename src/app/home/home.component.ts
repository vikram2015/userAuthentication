import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public UserList : any;

  addUser(){
    this.router.navigateByUrl('createUser');
  }

  constructor(private homeService : HomeService, private router: Router) { }

  ngOnInit() {

    this.homeService.getUser().subscribe((userData)=>{

      this.UserList = userData;
    },
    err =>{
      if(err instanceof HttpErrorResponse){
        console.log('====== err ============ '+err)
        if(err.status === 401){
          this.router.navigateByUrl('login');
        }
      }
    })
  }
}
