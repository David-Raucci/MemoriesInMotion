import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {


  myObjects = [
    {
      picture: "../../../assets/family2.jpg",
      date: "1979",
      blurb: "In this moment I felt so proud of my son Jimbo, he courageously yelled at a pedestrian heading onto a busy street and maybe saved a life!"
    },
    {
      picture: "../../../assets/family11.jpg",
      date: "1988",
      blurb: "Grandpa Joseppi outside a Manhattan building. He saw a 20 dollar bill on the ground, picked it up and gave it to me with a thumbs up. It's the little moments that count."
    },
    {
      picture: "../../../assets/family7.jpg",
      date: "1990",
      blurb: "A picture of my wife and child, the amount of sacrifice she went through to take care of our child while I had to be away for 6 months shakes me to my core."
    },
    {
      picture: "../../../assets/family10.jpg",
      date: "2001",
      blurb: "Jamie was not only the best baker in town, but he was also my best friend. We grew up doing everything together and would sneak end-of-the-day-bread from his shop into the homeless shelters."
    },
  ]

  testing: string = '../../../assets/flower_run.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
