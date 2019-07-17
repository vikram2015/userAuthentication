import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AppRoutingModule } from '../app.routing';
import { UserServiceService } from './user-service.service';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [UserServiceService],
  declarations: [CreateUserComponent, UpdateUserComponent, ViewUserComponent, UserListComponent]
})
export class UserModule { }
