import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-check-book-request',
  templateUrl: './check-book-request.component.html',
  styleUrls: ['./check-book-request.component.css']
})
export class CheckBookRequestComponent implements OnInit{

  requestForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userSerice: UserService, private snackBar: MatSnackBar, private router: Router,private authService: AuthService) {
    this.requestForm = this.fb.group({
      reason: ['', Validators.required],
      pages: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (!this.authService.isUser() || this.authService.getUser() == 'failure') {
      this.router.navigate(['/user/login']);
    }
  }

  onSubmit() {
    let check ={...this.requestForm.value}
    check.status='Requested';
    check.uid=this.authService.getUser();
    this.userSerice.checkBookRequest(check).subscribe({
      next: data => {
        if(data!="failure"){
            this.snackBar.open('Your check book will be dispatched soon once, Manager approves the request', 'Close', {
              duration: 6000, 
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
            this.requestForm.reset();
        }
      },
      error: error => {
        this.snackBar.open('Error Occured..Try again', 'Close', {
          duration: 4000, 
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    });
  }
}
