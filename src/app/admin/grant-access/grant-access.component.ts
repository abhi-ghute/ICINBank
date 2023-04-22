import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor() {
  }

  close() {
    this.accessGranted.emit(this.user);
  }

  grantAccess() {
    console.log("done");
    this.accessGranted.emit(this.user);
  }
}
