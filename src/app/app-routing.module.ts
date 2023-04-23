import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistationComponent } from './user/registation/registation.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { DepositComponent } from './user/deposit/deposit.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { BlockUserComponent } from './admin/block-user/block-user.component';
import { UnblockComponent } from './admin/unblock/unblock.component';
import { AuthorizeUserComponent } from './admin/authorize-user/authorize-user.component';
import { ViewBalanceComponent } from './user/view-balance/view-balance.component';
import { ViewTransactionsComponent } from './user/view-transactions/view-transactions.component';

const routes: Routes = [
  {path:'user',children:[
    {path:'register',component:RegistationComponent},
    {path:'login',component:UserLoginComponent},
    {path:'deposit',component:DepositComponent},
    {path:'transactions',component:ViewTransactionsComponent},
  ]},
  {path:'admin',children:[
    {path:'authorize',component:AuthorizeUserComponent},
    {path:'users',component:UserListComponent},
    {path:'login',component:AdminLoginComponent},
    {path:'block',component:BlockUserComponent},
    {path:'unblock',component:UnblockComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
