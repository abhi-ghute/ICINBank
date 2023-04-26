import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { UserService } from 'src/app/services/user.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  user: any;
  depositForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService, private snackBar: MatSnackBar,private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.depositForm = this.fb.group({
      accountNumber: [{value:'',disabled:true}],
      depositAmount: ['', [Validators.required, Validators.min(0.01)]]
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
        this.depositForm.get('accountNumber')?.setValue(this.user.accountNumber);
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
      amount:this.depositForm.value.depositAmount,
      refrenceNumber:referenceNumber,
      description:"Deposit"
    }
  
    this.transactionService.deposit(transaction).subscribe({
      next:data=>{
        alert("Deposited Successfully...\n ref. no.:"+referenceNumber);
        this.getUser();
        this.depositForm.reset();
        this.depositForm.get('accountNumber')?.setValue(this.user.accountNumber);
        window.location.reload();
      },
      error:error=>{
        console.log(error);
        alert("Transaction error try again...")
      }
    });
  }
}
