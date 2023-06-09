import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';
import { v4 as uuidv4 } from 'uuid';
import { RecipientsListComponent } from '../recipients-list/recipients-list.component';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.css']
})
export class TransferFundsComponent implements OnInit{
  user: any;
  transferForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService, private snackBar: MatSnackBar, private transactionService: TransactionService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.transferForm = this.fb.group({
      fromAccount: [{ value: '', disabled: true }],
      toAccount: ['', Validators.required],
      amount: ['', Validators.required],
      holderName:['',Validators.required]
    });

    if (!this.authService.isUser() || this.authService.getUser() == 'failure') {
      this.router.navigate(['/user/login']);
    }

    this.getUser();

  }
  getUser() {
    let id = this.authService.getUser();
    this.userService.getUser(id).subscribe({
      next: data => {
        console.log(data);
        this.user = data;
        this.transferForm.get('fromAccount')?.setValue(this.user.accountNumber);
      },
      error: error => {
        this.snackBar.open('Error occured..Try again', 'Close', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    });
  }
  onSubmit() {
    const referenceNumber = uuidv4();
    let transaction = {
      uid: this.authService.getUser(),
      primaryAccountNumber: this.user.accountNumber,
      amount: this.transferForm.value.amount,
      refrenceNumber: referenceNumber,
      description: "Transfer",
      secondaryAccountNumber: this.transferForm.value.toAccount,
      holderName:this.transferForm.value.holderName
    }

    this.transactionService.transfer(transaction).subscribe({
      next: data => {
        if(data=='unAuthorized'){
          alert("You cannot transfer money from the account..transfer money for this account is blocked..please contact Bank Manager");
        }else if (data == 'lowBal') {
          alert("Low Balance... you can withdraw upto " + this.user.accountBalance);
        }else if(data=='notFound'){
          alert("Wrong Account Number... please try again ");
        } else {
          alert("Transfered Successfully...\n ref. no.:" + referenceNumber);
          this.getUser();
          this.transferForm.reset();
          this.transferForm.get('fromAccount')?.setValue(this.user.accountNumber);
          window.location.reload();
        }
      },
      error: error => {
        console.log(error);
        alert("Transaction error try again...")
      }
    });
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(RecipientsListComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result==undefined){
   
      }else{
        this.transferForm.get('toAccount')?.setValue(result.secondaryAccountNumber);
        this.transferForm.get('holderName')?.setValue(result.holderName);
      }
    });
  }
}
