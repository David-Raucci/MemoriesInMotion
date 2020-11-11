import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAccount } from 'src/app/models/user-account';
import { UserAccountService } from 'src/app/services/user-account.service';
import { Router } from '@angular/router'
import { EmailSignupService } from 'src/app/services/email-signup.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(private userAccountService: UserAccountService, private fb: FormBuilder, private router: Router, private signupEmailSer: EmailSignupService) { }

  // userAccountForm = this.fb.group({
  //   userId: [20,  [Validators.required, Validators.min(5), Validators.max(30)]],
  //   email: ['',  [Validators.required, Validators.min(5), Validators.max(30), Validators.email]],
  //   password: ['',  [Validators.required, Validators.min(5), Validators.max(30)]],
  //   firstName: ['',  [Validators.required, Validators.min(5), Validators.max(30)]],
  //   middleName: ['',  [Validators.required, Validators.min(5), Validators.max(30)]],
  //   lastName: ['',  [Validators.required, Validators.min(5), Validators.max(30)]]
  // })


  // userAccountForm = this.fb.group({
  //   userId: ['',  Validators.required],
  //   email: ['',  Validators.required],
  //   password: ['',  Validators.required],
  //   firstName: ['',  Validators.required],
  //   middleName: ['',  Validators.required],
  //   lastName: ['',  Validators.required]
  //   })

    userAccountForm = this.fb.group({
      userId: [''],
      email: [''],
      password: [''],
      firstName: [''],
      middleName: [''],
      lastName: ['']
      })

  onSubmit() {
    let userId = this.userAccountForm.get('userId').value;
    let userEmail = this.userAccountForm.get('email').value;
    let userPassword = this.userAccountForm.get('password').value;
    let userFirstName = this.userAccountForm.get('firstName').value;
    let userMiddleName = this.userAccountForm.get('middleName').value;
    let userLastName = this.userAccountForm.get('lastName').value;
    const user = new UserAccount(userId, userEmail, userPassword, userFirstName, userMiddleName, userLastName);
    console.log(user);
    this.signupEmailSer.signupEmail(userEmail);
    this.userAccountService.addUserAccount(user);
    this.router.navigate(['verify-email']);
    console.log('foo sign up')
  }

  ngOnInit(): void {

  }
}
