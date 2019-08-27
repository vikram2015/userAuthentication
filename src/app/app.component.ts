import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService : AuthService, private router : Router){}
  
  logout(){
    console.log('--------- inside the logout function ---------')
    let logoutUser = {
      instruction : 'logout'
    }
    this.authService.logout(logoutUser).subscribe((status)=>{
      console.log('=========user   '+status);
      if(status.success == true){
        localStorage.removeItem('token');
        this.router.navigateByUrl('login');
      }
    })
  }


}
