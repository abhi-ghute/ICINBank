import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn = false;
  isUser = false;
  isAdmin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.authService.loggedIn.subscribe((loggedIn: boolean) => {
    //   this.isLoggedIn = loggedIn;
    //   this.isUser = this.authService.isUser();
    //   this.isAdmin = this.authService.isAdmin();
    // });
    // this.isLoggedIn =true;
    // this.isUser =true;
    // this.isAdmin = false;

  }

  logout(): void {
    //this.authService.logout();
    this.router.navigate(['/login']);
  }

}
