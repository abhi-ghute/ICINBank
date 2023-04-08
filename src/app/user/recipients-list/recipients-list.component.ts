import { Component } from '@angular/core';

@Component({
  selector: 'app-recipients-list',
  templateUrl: './recipients-list.component.html',
  styleUrls: ['./recipients-list.component.css']
})
export class RecipientsListComponent {

  recipients = [
    { name: 'John Doe', accountNumber: '123456789', accountType: 'Checking' },
    { name: 'Jane Smith', accountNumber: '987654321', accountType: 'Savings' },
    { name: 'Bob Johnson', accountNumber: '555555555', accountType: 'Checking' }
  ];
  
}
