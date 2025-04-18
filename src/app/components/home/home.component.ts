import { Component } from '@angular/core';
import { Iawards, Iphotos } from '../../iphotos';
import { awards, photos } from '../../photos';
import { RouterLink } from '@angular/router';
import {HeroComponent} from '../hero/hero.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactUsComponent } from "../../contact-us/contact-us.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroComponent, TestimonialsComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
photos: Iphotos[] = photos;
awards: Iawards[] = awards;
}
