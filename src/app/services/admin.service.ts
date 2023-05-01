import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  rootUrl:string="http://localhost:8090/icinbank/admin/";

  constructor(private http:HttpClient) { }

  authorize(user:any):Observable<any>{
    return this.http.post(this.rootUrl+"authorize",user,{responseType:'text'});
  }

  block(user:any):Observable<any>{
    return this.http.post(this.rootUrl+"block",user,{responseType:'text'});
  }

  unblock(user:any):Observable<any>{
    return this.http.post(this.rootUrl+"unblock",user,{responseType:'text'});
  }

  chequeRequests():Observable<any>{
    return this.http.get(this.rootUrl+"chequeRequests");
  }

  approveRequest(id:string):Observable<any>{
    return this.http.get(this.rootUrl+"approveRequest?id="+id,{responseType:'text'});
  }
}
