import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AUTHENTICATED_USER } from 'src/app/services/hardcode-authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  name: string;
  myTest;

  constructor(public route:ActivatedRoute) { }

  isAdmin() {
    if (sessionStorage.getItem(AUTHENTICATED_USER) === 'Admin@mail.com') {
      return true
    } else {
      return false
    }
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];

  }

}
