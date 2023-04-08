import { Component } from '@angular/core';

interface Transaction {
  date: string;
  description: string;
  amount: number;
  referenceNumber: string;
}

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent {
  transactions: Transaction[] = [
    { date: '2022-04-01', description: 'Deposit', amount: 1000, referenceNumber: '1234567890' },
    { date: '2022-04-02', description: 'Withdrawal', amount: -500, referenceNumber: '0987654321' },
    { date: '2022-04-03', description: 'Deposit', amount: 250, referenceNumber: '4567890123' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
