import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-accounr-details',
  templateUrl: './accounr-details.component.html',
  styleUrls: ['./accounr-details.component.css']
})
export class AccounrDetailsComponent {
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
