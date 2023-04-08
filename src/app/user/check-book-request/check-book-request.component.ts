import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-book-request',
  templateUrl: './check-book-request.component.html',
  styleUrls: ['./check-book-request.component.css']
})
export class CheckBookRequestComponent {

  requestForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.requestForm = this.fb.group({
      reason: ['', Validators.required],
      pages: ['', Validators.required]
    });
  }

  onSubmit() {
    
  }


}
