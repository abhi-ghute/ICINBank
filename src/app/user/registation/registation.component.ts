import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent {
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      aadharNo: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      panCard: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{10}$')]],
      gender: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
