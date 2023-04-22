import { Component, OnInit } from '@angular/core';
import { GrantAccessComponent } from '../grant-access/grant-access.component';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  filteredUser:any;
  userList:any;
  currentId:string='';
 
  constructor(private modalService: NgbModal,private userService:UserService) {
  }

  ngOnInit(): void {
      this.userService.getAll().subscribe({
        next: data => {
          this.userList=data;
          console.log(this.userList);
          
        },
        error: error => {
          console.log('Error:', error);
        }
      });
  }

  popupVisible = false;

  openPopup(id:string) {
    this.filteredUser = this.userList.filter((user:any) => user.id === id)[0];
    console.log(this.filteredUser);
    this.popupVisible = true;
  }

  closePopup() {
    this.popupVisible = false;
  }

  onAccessGranted(user:any) {
    console.log(user);
    // Do something with the user object, such as updating it in the parent component's state
    this.popupVisible = false;
  }
}
