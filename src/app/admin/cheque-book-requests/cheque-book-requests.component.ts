import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cheque-book-requests',
  templateUrl: './cheque-book-requests.component.html',
  styleUrls: ['./cheque-book-requests.component.css']
})
export class ChequeBookRequestsComponent implements OnInit {

  chequeRequests: any;

  constructor(private modalService: NgbModal, private userService: UserService, private adminService: AdminService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.getRequests()
    
    console.log(this.authService.isAdmin());

    if (!this.authService.isAdmin() || this.authService.getUser() == 'failure') {
      this.router.navigate(['/admin/login']);
    }
  }

  getRequests(){
    this.adminService.chequeRequests().subscribe({
      next: data => {
        this.chequeRequests = data;
        console.log(this.chequeRequests);
      },
      error: error => {
        console.log('Error:', error);
      }
    });
  } 

  approve(id:string){
    this.adminService.approveRequest(id).subscribe({
      next: data => {
        alert("Check book will be dispatched soon..");
      },
      error: error => {
        console.log('Error:', error);
      }
    });
    this.getRequests();
  }
}