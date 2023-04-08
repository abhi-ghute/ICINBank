import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistationComponent } from './user/registation/registation.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
  {path:'user',children:[
    {path:'register',component:RegistationComponent},
    {path:'login',component:UserLoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
