import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userRootUrl:string="http://localhost:8090/icinbank/user/";
  adminRootUrl:string="http://localhost:8090/icinbank/admin/";

  constructor(private http:HttpClient) {}

  userLogin(login:object):Observable<any>{
    return this.http.post(this.userRootUrl+"login",login,{responseType:'text'});
  }

  adminLogin(login:object):Observable<any>{
    return this.http.post(this.adminRootUrl+"login",login,{responseType:'text'});
  }

  isAdmin():boolean{
    let role = sessionStorage.getItem("role");
    let user = sessionStorage.getItem("user");
  
    if(role != '' && role != undefined && role != null  && user != '' && user != undefined && user != null){
      if(role!='admin')
        return false;
      return true;
    }
    return false;
  }

  isUser(){
    let role = sessionStorage.getItem("role");
    let user = sessionStorage.getItem("user");

    if( role != '' && role != undefined && role != null && user != '' && user != undefined && user != null){
      if(role=='admin'){
        return false;
      }
      return true;
    }
    return false;
  }

  getUser(){
    let user = sessionStorage.getItem("user");
    if(user != '' && user != undefined && user != null){
      return user;
    }
    return "login";
  }

  getRole(){
    let role = sessionStorage.getItem("role");
    if(role != '' && role != undefined && role != null){
      return role;
    }
    return "login";
  }

  isLoggedIn(){
    return this.isUser() || this.isAdmin();
  }
}
