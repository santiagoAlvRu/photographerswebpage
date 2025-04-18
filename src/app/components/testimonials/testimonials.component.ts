import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  standalone:true,
})
export class TestimonialsComponent {
  slideTo(index: number): void {   //no return funtion slideto with index---created
    const transform = `translateX(${index * -800}px)`; //a constant trasnform which translate each slide to -800px as i created each slide of 800px
    document.querySelector('#slider')!.setAttribute('style', `transform: ${transform}`); //fetch the id slider and setattribute to to transform
  }
}
