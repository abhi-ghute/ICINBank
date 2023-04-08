import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {

  depositForm: FormGroup= new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.depositForm = this.fb.group({
      accountNumber: ['', [Validators.required]],
      depositAmount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    // Process deposit
    console.log(this.depositForm.value);
  }
}
