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

}