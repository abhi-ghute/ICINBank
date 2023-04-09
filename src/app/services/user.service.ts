import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  rootUrl:string="http://localhost:8090/icinbank/user/";
  constructor(private http:HttpClient) { }

  createUser(user:any):Observable<any>{
    return this.http.post(this.rootUrl+"create",user,{responseType:'text'});
  }
}
