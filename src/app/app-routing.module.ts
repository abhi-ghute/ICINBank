import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistationComponent } from './user/registation/registation.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { DepositComponent } from './user/deposit/deposit.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

const routes: Routes = [
  {path:'user',children:[
    {path:'register',component:RegistationComponent},
    {path:'login',component:UserLoginComponent},
    {path:'deposit',component:DepositComponent},
  ]},
  {path:'admin',children:[
    {path:'users',component:UserListComponent},
    {path:'login',component:AdminLoginComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
