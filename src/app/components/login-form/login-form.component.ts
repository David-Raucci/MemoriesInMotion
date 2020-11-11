import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from 'src/app/services/hardcode-authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string = 'Invalid Login'
  invalidLogin = false;

  constructor(private router: Router, public hardcodeAuthentication: HardcodeAuthenticationService) { }

  handleLogin() {

    this.hardcodeAuthentication.authValidation(this.email, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['account', this.email])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )



  }

  ngOnInit(): void {
  }

}






// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { HardcodeAuthenticationService } from 'src/app/services/hardcode-authentication.service';

// @Component({
//   selector: 'app-login-form',
//   templateUrl: './login-form.component.html',
//   styleUrls: ['./login-form.component.css']
// })
// export class LoginFormComponent implements OnInit {

//   email: string;
//   password: string;
//   errorMessage: string = 'Invalid Login'
//   invalidLogin = false;

//   constructor(private router: Router, public hardcodeAuthentication: HardcodeAuthenticationService) { }

//   handleLogin() {
//     if (this.hardcodeAuthentication.authValidation(this.email, this.password)) {
//       this.router.navigate(['account', this.email])
//       this.invalidLogin = false;
//     } else {
//       this.invalidLogin = true;
//     }
//   }

//   ngOnInit(): void {
//   }

// }
