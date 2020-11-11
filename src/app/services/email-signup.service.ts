import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailSignupService {

  private signupUrl = "localhost:8080/api/email";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${sessionStorage.getItem('token')}`
    })
  };



  signupEmail(email: string) {
    console.log(email);
    this.httpClient.get(`${this.signupUrl}/${email}`);
    this.httpClient.get("/hi");
    console.log('foo email service');
  }

  constructor(private httpClient: HttpClient) { }
}
