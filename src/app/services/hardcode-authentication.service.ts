import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from './../../app/app.constants'
import { map } from 'rxjs/operators'

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticated_user'



@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor(private http: HttpClient) { }


  authValidation(email, password) {

    return this.http.post<any>(
      `${API_URL}/authenticate`, {
        email,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, email);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }
  isAdminLoggedIn() {
    let admin = sessionStorage.getItem(AUTHENTICATED_USER)
    return (admin === 'Admin@mail.com')
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
  }


}




// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HardcodeAuthenticationService {

//   authValidation(email, password) {
//     console.log(this.isUserLoggedIn());
//     if(email === 'hiemail' && password === 'mypassword') {
//       sessionStorage.setItem('authenticatedUser', email)
//       console.log(this.isUserLoggedIn());
//       return true;
//     } else {
//       return false;
//     }
//   }

//   isUserLoggedIn() {
//     let user = sessionStorage.getItem('authenticatedUser')
//     return !(user === null)
//   }

//   logout() {
//     sessionStorage.removeItem('authenticatedUser')
//   }

//   constructor() { }
// }
