import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-recipients-list',
  templateUrl: './recipients-list.component.html',
  styleUrls: ['./recipients-list.component.css']
})
export class RecipientsListComponent implements OnInit{
  onSave: EventEmitter<any> = new EventEmitter();

  onRowClick(recipient:any): void {
    this.onSave.emit('saved data');
    this.dialogRef.close(recipient);
  }

  close(){
    this.onSave.emit('saved data');
    this.dialogRef.close();
  }

  transactions: any;
  recipients:any;

  constructor(private authService:AuthService,private router:Router,private transactionService:TransactionService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<RecipientsListComponent>) { }
  ngOnInit(): void {
    this.transactionService.getTransactions(this.authService.getUser()).subscribe({
      next:data=>{
        this.transactions=data.filter((data:any)=>{
          return data.description=='Transfer';
        });

        this.recipients = data.filter((item:any, index:any, arr:any) => {
          return arr.findIndex((obj:any) => obj.secondaryAccountNumber === item.secondaryAccountNumber) === index;
        });
        
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
