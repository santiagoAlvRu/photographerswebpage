import { Component } from '@angular/core';
import { Iphotos } from '../../iphotos';
import { photos } from '../../photos';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
photos: Iphotos[] = photos;
}
