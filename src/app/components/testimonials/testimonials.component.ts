import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  standalone:true,
})
export class TestimonialsComponent {
  slideTo(index: number) {
    const slider = document.getElementById('slider');
    if (slider) {
      const offset = index * -100;
      slider.style.transform = `translateX(${offset}%)`;
  
      // Optionally toggle active class on buttons
      document.querySelectorAll('.controls button').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
      });
    }
  }
}
