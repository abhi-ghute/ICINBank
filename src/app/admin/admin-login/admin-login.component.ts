import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder,private authService:AuthService,private snackBar: MatSnackBar,private router:Router) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  ngOnInit() {
  }

  onSubmit() {
   this.authService.adminLogin(this.loginForm.value).subscribe({
    next: data => {
      if(data=="admin"){
        sessionStorage.setItem("user",data);
        sessionStorage.setItem("role","admin")
        this.snackBar.open('Successfully logged In', 'Close', {
          duration: 4000, 
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        this.router.navigate(['/admin/users']);
      }else{
        this.snackBar.open('Wrong Crentials..Try again', 'Close', {
          duration: 4000, 
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    },
    error: error => {
      console.log('Error:', error);
    }
  });

  }
}
