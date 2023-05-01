import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit{
  transactions: any;

  constructor(private authService:AuthService,private router:Router,private transactionService:TransactionService,private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.transactionService.getTransactions(this.authService.getUser()).subscribe({
      next:data=>{
        this.transactions=data;
        console.log(data);
        
      },
      error:error=>{
        this.snackBar.open('Error occured..Try again', 'Close', {
          duration: 4000, 
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    });
  }
}
