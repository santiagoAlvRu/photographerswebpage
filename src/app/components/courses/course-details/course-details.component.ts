import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courses } from '../../../courses';
import { Course } from '../../../courses.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  course: Course | undefined;
  courses: Course[] = courses;

  constructor(private route: ActivatedRoute) {
    this.initializeCourse();
  }

  private initializeCourse(): void { //private method to initialize course meaning it can only be accessed within this class
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.course = this.courses.find(c => c.id === courseId);
  }
}

// This code defines a CourseDetailsComponent in Angular that retrieves and displays details of a specific course based on the ID passed in the route parameters. The component uses the ActivatedRoute service to access the route parameters and find the corresponding course from a predefined list of courses. The course details are then displayed in the template.