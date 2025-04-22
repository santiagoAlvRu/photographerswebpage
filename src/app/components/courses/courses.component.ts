import { Component } from '@angular/core';
import { courses } from '../../courses';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
courses = courses;
  }
