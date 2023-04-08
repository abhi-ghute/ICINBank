import { Component } from '@angular/core';

@Component({
  selector: 'app-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.css']
})
export class ViewBalanceComponent {
  balance: number = 1000;

  constructor() { }

  ngOnInit(): void {
  }
}
