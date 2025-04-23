import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, NgbModule], //Import NgbModule here to use it in the app
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photographerswebpage';
}