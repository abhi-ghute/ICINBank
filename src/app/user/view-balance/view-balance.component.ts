import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.css']
})
export class ViewBalanceComponent {
  user:any;

  constructor(private authService:AuthService,private router:Router,private userService:UserService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(!this.authService.isUser() || this.authService.getUser()=='failure'){
      this.router.navigate(['/user/login']);
    }

    let id = this.authService.getUser();
    
    this.userService.getUser(id).subscribe({
      next:data=>{
        this.user=data;
      },
      error:error=>{
        this.snackBar.open('Error occured..Try again', 'Close', {
          duration: 4000, 
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    });
  }
}
