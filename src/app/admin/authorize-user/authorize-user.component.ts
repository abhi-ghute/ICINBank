import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-authorize-user',
  templateUrl: './authorize-user.component.html',
  styleUrls: ['./authorize-user.component.css']
})
export class AuthorizeUserComponent implements OnInit{
  filteredUser:any;
  userList:any;
  searchText:string='';
 
  constructor(private modalService: NgbModal,private userService:UserService,private adminService:AdminService,private authService: AuthService,private router:Router) {
  }

  ngOnInit(): void {
    if (!this.authService.isAdmin() || this.authService.getUser() == 'failure') {
      this.router.navigate(['/admin/login']);
    }
      this.getUsers();
      
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

    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].id === user.id) {
        this.userList.splice(i, 1, user);
        break;
      }
    }

    this.popupVisible = false;
  }

  authorize(user:any){
    this.adminService.authorize(user).subscribe({
      next: data => {
        console.log("Success");
        this.getUsers();
      },
      error: error => {
        console.log('Error:', error);
      }
    });
  }

  getUsers(){
    this.userService.getAll("Disabled").subscribe({
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
