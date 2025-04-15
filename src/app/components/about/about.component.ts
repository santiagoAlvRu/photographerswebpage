import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name: string = 'Your Name';
  location: string = 'Your Location';
  experienceYears: number = 10;
  journeyStart: string = 'age/event';

  constructor() { }
}
