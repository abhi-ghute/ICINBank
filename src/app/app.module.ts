import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegistationComponent } from './user/registation/registation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DepositComponent } from './user/deposit/deposit.component';
import { WithdrawComponent } from './user/withdraw/withdraw.component';
import { ViewTransactionsComponent } from './user/view-transactions/view-transactions.component';
import { ViewBalanceComponent } from './user/view-balance/view-balance.component';
import { TransferFundsComponent } from './user/transfer-funds/transfer-funds.component';
import { RecipientsListComponent } from './user/recipients-list/recipients-list.component';
import { CheckBookRequestComponent } from './user/check-book-request/check-book-request.component';
import { AuthorizeUserComponent } from './admin/authorize-user/authorize-user.component';
import { GrantAccessComponent } from './admin/grant-access/grant-access.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ChequeBookRequestsComponent } from './admin/cheque-book-requests/cheque-book-requests.component';
import { BlockUserComponent } from './admin/block-user/block-user.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UnblockComponent } from './admin/unblock/unblock.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AccounrDetailsComponent } from './user/accounr-details/accounr-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    RegistationComponent,
    UserLoginComponent,
    HeaderComponent,
    FooterComponent,
    DepositComponent,
    WithdrawComponent,
    ViewTransactionsComponent,
    ViewBalanceComponent,
    TransferFundsComponent,
    RecipientsListComponent,
    CheckBookRequestComponent,
    AuthorizeUserComponent,
    GrantAccessComponent,
    UserListComponent,
    ChequeBookRequestsComponent,
    BlockUserComponent,
    AdminLoginComponent,
    UnblockComponent,
    ProfileComponent,
    AccounrDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
