import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from 'src/app/services/hardcode-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hardcodeAuthorization: HardcodeAuthenticationService) { }

  ngOnInit(): void {
    this.hardcodeAuthorization.logout();
  }

}
