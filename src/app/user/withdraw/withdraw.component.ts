import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  withdrawForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.withdrawForm = this.fb.group({
      accountNumber: ['', [Validators.required]],
      withdrawAmount: ['', [Validators.required, Validators.min(1)]],
      referenceNumber: ['', [Validators.required]]
    });
  }

  onSubmit() {
    // Process withdrawal
    console.log(this.withdrawForm.value);
  }

}
