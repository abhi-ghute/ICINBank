import { Component } from '@angular/core';

@Component({
  selector: 'app-grant-access',
  templateUrl: './grant-access.component.html',
  styleUrls: ['./grant-access.component.css']
})
export class GrantAccessComponent {

  user:any;

  grantAccess() {
    // Do something with the user object to grant access
    console.log('Access granted!');
  }
  
}
