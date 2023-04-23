import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-unblock',
  templateUrl: './unblock.component.html',
  styleUrls: ['./unblock.component.css']
})
export class UnblockComponent implements OnInit{
  userList:any;
  searchText:string='';
 
  constructor(private modalService: NgbModal,private userService:UserService,private adminService:AdminService) {
  }

  ngOnInit(): void {
      this.getUsers();
  }

  Unblock(user:any){
    this.adminService.unblock(user).subscribe({
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
    this.userService.getAll("Blocked").subscribe({
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


