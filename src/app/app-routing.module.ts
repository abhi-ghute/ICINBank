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
import { ViewTransactionsComponent } from './user/view-transactions/view-transactions.component';
import { WithdrawComponent } from './user/withdraw/withdraw.component';
import { TransferFundsComponent } from './user/transfer-funds/transfer-funds.component';
import { CheckBookRequestComponent } from './user/check-book-request/check-book-request.component';
import { ChequeBookRequestsComponent } from './admin/cheque-book-requests/cheque-book-requests.component';
import { RecipientsListComponent } from './user/recipients-list/recipients-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AccounrDetailsComponent } from './user/accounr-details/accounr-details.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'',component:UserLoginComponent},
  {path:'aboutUs',component:AboutusComponent},
  {path:'user',children:[
    {path:'register',component:RegistationComponent},
    {path:'login',component:UserLoginComponent},
    {path:'deposit',component:DepositComponent},
    {path:'withdraw',component:WithdrawComponent},
    {path:'transfer',component:TransferFundsComponent},
    {path:'chequebook',component:CheckBookRequestComponent},
    {path:'transactions',component:ViewTransactionsComponent},
    {path:'recipients',component:RecipientsListComponent},
    {path:'profile',component:ProfileComponent},
    {path:'accountDetails',component:AccounrDetailsComponent},
  ]},
  {path:'admin',children:[
    {path:'authorize',component:AuthorizeUserComponent},
    {path:'users',component:UserListComponent},
    {path:'login',component:AdminLoginComponent},
    {path:'block',component:BlockUserComponent},
    {path:'unblock',component:UnblockComponent},
    {path:'chequebook',component:ChequeBookRequestsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
