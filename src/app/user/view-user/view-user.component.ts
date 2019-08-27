import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app.routing';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  public viewUser : Object = {};
  constructor(private myService: UserServiceService, private router: Router) { }

  goBack(){
    this.router.navigateByUrl('userList');
  }


  ngOnInit() {
    this.viewUser =  this.myService.getFormData();
  }

}
