import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app.routing';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public userUpdate : Object = {};

  constructor(private myService: UserServiceService, private router: Router) { }

  updateUser() {
    this.myService.updateUser(this.userUpdate).subscribe((data) => {
      if (data.success) {
        this.router.navigateByUrl('userList');
      }
    })
  }

  goBack(){
    this.router.navigateByUrl('userList');
  }

  ngOnInit() {

    this.userUpdate = this.myService.getFormData();
    console.log(this.userUpdate);

  }

}
