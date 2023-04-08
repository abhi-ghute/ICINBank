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
    AuthorizeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
