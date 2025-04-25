import { Component, HostListener } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('navbar-transparent');
    } else {
      navbar?.classList.remove('navbar-transparent');
    }
  }

  closeNavbar() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

}
