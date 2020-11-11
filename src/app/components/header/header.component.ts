import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from 'src/app/services/hardcode-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public hardcodeAuth: HardcodeAuthenticationService) { }

  ngOnInit(): void {

  }

}
