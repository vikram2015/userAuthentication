import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';


const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'userList', component:  UserListComponent},
  { path: 'createUser', component:  CreateUserComponent},
  { path: 'viewUser', component:  ViewUserComponent},
  { path: 'updateUser', component:  UpdateUserComponent},
  

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})



export class AppRoutingModule { }
