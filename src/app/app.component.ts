import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './components/courses/courses.component';
import { BeginnerComponent } from './components/courses/beginner/beginner.component';
import { LandscapeComponent } from './components/courses/landscape/landscape.component';
import { PortraitComponent } from './components/courses/portrait/portrait.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, NgbModule], //Import NgbModule here to use it in the app
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'photographerswebpage';
 
  }

