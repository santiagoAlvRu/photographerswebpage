import { Component } from '@angular/core';
import { Iawards, Iphotos } from '../../iphotos';
import { awards, photos } from '../../photos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
photos: Iphotos[] = photos;
awards: Iawards[] = awards;
}
