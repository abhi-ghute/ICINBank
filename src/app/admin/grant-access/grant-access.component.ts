import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-grant-access',
  templateUrl: './grant-access.component.html',
  styleUrls: ['./grant-access.component.css']
})
export class GrantAccessComponent {

  @Output() accessGranted = new EventEmitter<any>();

  @Input() user = {
    actionEntity: {
      transfer: false,
      deposit: false,
      withdrawal: false
    }
  };

  constructor(private authService: AuthService,private router:Router) {
    if (!this.authService.isAdmin() || this.authService.getUser() == 'failure') {
      this.router.navigate(['/admin/login']);
    }
  }

  close() {
    this.accessGranted.emit(this.user);
  }

  grantAccess() {
    console.log("done");
    this.accessGranted.emit(this.user);
  }
}
