import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  // cascadeText = new Promise(this.fallingText)
  //   fallingText = (text: string) => {
  //     const splitString = text.split("");
  //     setInterval(() => {
  //         for(let i=0; i <= splitString.length; i++) {
  //             console.log(splitString[i])
  //         }
  //     }, 1000)
  // }

}
