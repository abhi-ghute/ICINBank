import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private authService:AuthService,private snackBar: MatSnackBar,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  ngOnInit() {
  }

  onSubmit() {
   this.authService.userLogin(this.loginForm.value).subscribe(data=>{
    this.snackBar.open('Successfully logged In', 'Close', {
      duration: 4000, 
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
    this.router.navigate(['/user/transactions']);
   },error => {
    this.snackBar.open('Invalid Details..Please check the deatils and try again', 'Close', {
      duration: 4000, 
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
      },);
  }
}
