import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit{

  user: any;
  withdrawForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService, private snackBar: MatSnackBar,private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.withdrawForm = this.fb.group({
      accountNumber: [{value:'',disabled:true}],
      withdrawAmount: ['', [Validators.required, Validators.min(1)]]
    });

    if (!this.authService.isUser() || this.authService.getUser() == 'failure') {
      this.router.navigate(['/user/login']);
    }
    this.getUser();
  }
  getUser(){
    let id = this.authService.getUser();
    this.userService.getUser(id).subscribe({
      next: data => {
        console.log(data); 
        this.user = data;
        this.withdrawForm.get('accountNumber')?.setValue(this.user.accountNumber);
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
    let transaction ={
      uid:this.authService.getUser(),
      primaryAccountNumber:this.user.accountNumber,
      amount:this.withdrawForm.value.withdrawAmount,
      refrenceNumber:referenceNumber,
      description:"Withdraw"
    }
  
    this.transactionService.withdrawal(transaction).subscribe({
      next:data=>{
        if(data=='unAuthorized'){
          alert("You cannot withdraw money from the account..withdraw money for this account is blocked..please contact Bank Manager");
        }else if(data=='lowBal'){
          alert("Low Balance... you can withdraw upto "+this.user.accountBalance);
        }else{
          alert("Withdraw Successfully...\n ref. no.:"+referenceNumber);
          this.getUser();
          this.withdrawForm.reset();
          this.withdrawForm.get('accountNumber')?.setValue(this.user.accountNumber);
          window.location.reload();
        }
      },
      error:error=>{
        console.log(error);
        alert("Transaction error try again...")
      }
    });
  }

}

