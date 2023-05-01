import { Component, OnInit } from '@angular/core';
import { GrantAccessComponent } from '../grant-access/grant-access.component';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  filteredUser:any;
  userList:any;
  searchText:string='';
 
  constructor(private modalService: NgbModal,private userService:UserService,private adminService:AdminService,private authService: AuthService,private router:Router) {
  }

  ngOnInit(): void {
      this.getUsers();
      if (!this.authService.isAdmin() || this.authService.getUser() == 'failure') {
        this.router.navigate(['/admin/login']);
      }
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

    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id === user.id) {
        this.userList.splice(i, 1, user);
        break;
      }
    }

    this.adminService.authorize(user).subscribe({
      next: data => {
        console.log("Success");
        this.getUsers();
      },
      error: error => {
        console.log('Error:', error);
      }
    });
    
    this.popupVisible = false;
  }
  getUsers(){
    this.userService.getAll("Activated").subscribe({
      next: data => {
        this.userList=data;
        console.log(this.userList);
        
      },
      error: error => {
        console.log('Error:', error);
      }
    });
  }

  Searchfilter(){
    console.log(this.searchText);
    if(this.searchText =='' || this.searchText ==undefined || this.searchText==null){
      this.getUsers();
    }
    else{
      this.userService.getAll("Activated").subscribe({
        next: data => {
          this.userList = data.filter((user:any) => user.firstName.toLowerCase().includes(this.searchText.toLowerCase()) || user.lastName.toLowerCase().includes(this.searchText.toLowerCase()));   
        },
        error: error => {
          console.log('Error:', error);
        }
      });
    }
  }
}
