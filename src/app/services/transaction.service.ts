import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionRootUrl:string="http://localhost:8090/icinbank/transaction/";

  constructor(private http:HttpClient) {}

  deposit(transaction:object):Observable<any>{
    return this.http.post(this.transactionRootUrl+"deposit",transaction,{responseType:'text'});
  }
  withdrawal(transaction:object):Observable<any>{
    return this.http.post(this.transactionRootUrl+"withdrawal",transaction,{responseType:'text'});
  }
  transfer(transaction:object):Observable<any>{
    return this.http.post(this.transactionRootUrl+"transfer",transaction,{responseType:'text'});
  }

  getTransactions(uid:string):Observable<any>{
    return this.http.get(this.transactionRootUrl+"getTransactions?uid="+uid);
  }
}
