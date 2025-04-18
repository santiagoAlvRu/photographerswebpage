import { Component } from '@angular/core';
import { Iawards, Iphotos } from '../../iphotos';
import { awards, photos } from '../../photos';
import { RouterLink } from '@angular/router';
import {HeroComponent} from '../hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
photos: Iphotos[] = photos;
awards: Iawards[] = awards;
}
