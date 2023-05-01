import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn = false;
  isUser = false;
  isAdmin = false;

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
   this.isLoggedIn =this.authService.isLoggedIn();
   this.isAdmin = this.authService.isAdmin();
   this.isUser = this.authService.isUser();
  }

  logout(): void {
    sessionStorage.setItem("user",'');
    sessionStorage.setItem("role",'');
    this.router.navigate(['user/login']);
  }

}
