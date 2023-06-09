import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user:any;

  constructor(private authService:AuthService,private userService:UserService,private snackBar: MatSnackBar){}

  ngOnInit(): void {
       this.userService.getUser(this.authService.getUser()).subscribe({
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
