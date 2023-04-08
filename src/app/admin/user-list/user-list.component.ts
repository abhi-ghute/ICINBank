import { Component } from '@angular/core';
import { GrantAccessComponent } from '../grant-access/grant-access.component';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(private modalService: NgbModal) {}

  showPopup() {
    const modalRef = this.modalService.open(GrantAccessComponent);
    modalRef.componentInstance.user = 'Popup Title';
    modalRef.componentInstance.message = 'This is the message that will be displayed in the popup.';
  }
}
