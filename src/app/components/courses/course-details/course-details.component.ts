import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courses } from '../../../courses';
import { Course } from '../../../courses.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course | undefined;
  courses: Course[] = courses;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.course = courses.find(c => c.id === courseId);
  }
}
// This component is responsible for displaying the details of a specific course.