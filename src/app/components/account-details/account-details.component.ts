import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserAccount } from 'src/app/models/user-account';
import { AUTHENTICATED_USER } from 'src/app/services/hardcode-authentication.service';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  myUser: UserAccount=new UserAccount(0,'','','','','');
  myEmail = sessionStorage.getItem(AUTHENTICATED_USER);

  constructor(private userAccountService: UserAccountService, private fb: FormBuilder, private route: ActivatedRoute) { }


  userAccountDetails = this.fb.group({
    userId: [20,  [Validators.required, Validators.min(5), Validators.max(30)]],
    email: ['',  [Validators.required, Validators.min(5), Validators.max(30), Validators.email]],
    password: ['',  [Validators.required, Validators.min(5), Validators.max(30),]],
    firstName: ['',  [Validators.required, Validators.min(5), Validators.max(30),]],
    middleName: ['',  [Validators.required, Validators.min(5), Validators.max(30),]],
    lastName: ['',  [Validators.required, Validators.min(5), Validators.max(30),]]
  })

  // userAccountDetails = this.fb.group({
  //   userId: [20,  Validators.required],
  //   email: ['',  Validators.required],
  //   password: ['',  Validators.required],
  //   firstName: ['',  Validators.required],
  //   middleName: ['',  Validators.required],
  //   lastName: ['',  Validators.required]
  // })


  onSubmit() {
    let userId = this.userAccountDetails.get('userId').value;
    let userEmail = this.userAccountDetails.get('email').value;
    let userPassword = this.userAccountDetails.get('password').value;
    let userFirstName = this.userAccountDetails.get('firstName').value;
    let userMiddleName = this.userAccountDetails.get('middleName').value;
    let userLastName = this.userAccountDetails.get('lastName').value;
    let user = new UserAccount(userId, userEmail, userPassword, userFirstName, userMiddleName, userLastName);
    user.userId=this.myUser.userId;
    this.userAccountService.addUserAccount(user);
  }





  ngOnInit(): void {
    this.userAccountService.getUserAccount(this.myEmail).subscribe(
    data => {this.myUser = data._embedded.userAccounts[0];
      console.log('THIS IS MY UZAAA  ' + this.myUser.userId)
      this.userAccountDetails.get('email').setValue(this.myUser.email);
      this.userAccountDetails.get('password').setValue(this.myUser.password);
      this.userAccountDetails.get('firstName').setValue(this.myUser.firstName);
      this.userAccountDetails.get('middleName').setValue(this.myUser.middleName);
      this.userAccountDetails.get('lastName').setValue(this.myUser.lastName);
    })

    console.log(this.myUser);


  }


}
