import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAccount } from '../models/user-account'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    })
  };

  private baseUrl = "http://localhost:8080/api/userAccounts"

  constructor(private httpClient: HttpClient) { }

  addUserAccount(user: UserAccount): void {
    console.log('Add something ' + user.userId);
    const jsonPC = JSON.stringify(user);
    this.httpClient.post<UserAccount>(`${this.baseUrl}`, jsonPC, this.httpOptions).subscribe(
      (response) => console.log("response" + response),
      (error) => console.log(error)
    );
  }

  getUserAccount(email: string): Observable<GetUserAccounts> {
    return this.httpClient.get<GetUserAccounts>(`http://localhost:8080/api/userAccounts/search/findByEmail?email=${email}`, this.httpOptions)

  }

}


interface GetUserAccounts {
  _embedded: {
    userAccounts: UserAccount[];
  }


}
