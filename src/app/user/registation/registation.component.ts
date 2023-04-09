import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent {
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService:UserService,private snackBar: MatSnackBar) {
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
   this.userService.createUser(this.userForm.value).subscribe(data=>{
    if(data=="Success"){
      this.userForm.reset();
      this.snackBar.open('User created successfully..account details will be shared soon', 'Close', {
        duration: 4000, 
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      
    }else{
      this.snackBar.open('Error Occured please submit again', 'Close', {
        duration: 4000, 
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    }
   });
  }
}
