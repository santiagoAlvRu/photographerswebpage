import { Component } from '@angular/core';
import { courses } from '../../courses';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
courses = courses;
  }
