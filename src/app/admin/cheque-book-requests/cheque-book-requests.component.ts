import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cheque-book-requests',
  templateUrl: './cheque-book-requests.component.html',
  styleUrls: ['./cheque-book-requests.component.css']
})
export class ChequeBookRequestsComponent implements OnInit{
  userList:any;
  searchText:string='';
 
  constructor(private modalService: NgbModal,private userService:UserService,private adminService:AdminService) {
  }

  ngOnInit(): void {
      this.getUsers();
  }

  block(user:any){
    this.adminService.block(user).subscribe({
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
    this.userService.getAll("Activated").subscribe({
      next: data => {
        this.userList=data;
        console.log(this.userList);
        
      },
      error: error => {
        console.log('Error:', error);
      }
    });
    return this.userList;
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