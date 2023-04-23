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
   this.authService.userLogin(this.loginForm.value).subscribe({
    next: data => {
      console.log(data);
      if(data!="failure"){
        if(data=='Blocked'){
          this.snackBar.open('This account is blocked currently due the threat.. please contact bank managet to unblock', 'Close', {
            duration: 6000, 
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }else if(data=='Disabled'){
          this.snackBar.open('Please wait.. your bank account will be created once Adminstrator authorize it', 'Close', {
            duration: 4000, 
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }else{
          sessionStorage.setItem("user",data);
          sessionStorage.setItem("role","user")
          this.snackBar.open('Successfully logged In', 'Close', {
            duration: 4000, 
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          this.router.navigate(['/user/transactions']);
        }
        
      }else{
        this.snackBar.open('Wrong Crentials..Try again', 'Close', {
          duration: 4000, 
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    },
    error: error => {
      this.snackBar.open('Wrong Crentials..Try again', 'Close', {
        duration: 4000, 
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
  });
  }
}
