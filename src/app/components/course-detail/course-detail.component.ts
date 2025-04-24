import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Course } from '../course.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit{ //OnInit is an interface that allows you to use the ngOnInit lifecycle hook and it is used to initialize the component after Angular has initialized all data-bound properties.
  course: Course = {} as Course; // The course property is of type Course, which is an interface that defines the structure of a course object. The course property is initialized to an empty object of type Course.

  public courses: Course[] = [
    {
      id: 1,
      name: 'Beginner Photography',
      description: 'Learn the basics of photography, including camera settings, composition, and lighting.',
      start: '05/01/2026',
      duration: '3 weeks',
      cost: '$150',
      button: 'Enroll Now'
      },
      
      {
      
      id: 2,
      name: 'Portrait Photography',
      description: 'Master the art of capturing stunning portraits with techniques for posing, lighting, and editing.',
      start: '07/03/2026',
      duration: '4 weeks',
      cost: '$200',
      button: 'Enroll Now'
      },
      
      {
      id: 3,
      name: 'Landscape Photography',
      description: 'Explore the beauty of nature through your lens. Learn to capture breathtaking landscapes with expert tips.',
      start: '01/06/2026',
      duration: '5 weeks',
      cost: '$180',
      button: 'Enroll Now'
      }
  ];

  constructor(private route: ActivatedRoute) { } //The constructor is a special method that is called when an instance of the class is created. It is used to initialize the properties of the class and to inject dependencies. The constructor takes a parameter of type ActivatedRoute, which is used to access the route parameters.
  
  ngOnInit(): void {
    this.route.params.subscribe(params => { //Here, we subscribe to the params observable of the ActivatedRoute service. This allows us to react to changes in the route parameters.
      const courseId = params['courseId']; 
      this.loadCourse(courseId); //The loadCourse method is called with the courseId parameter. This method is responsible for loading the course details based on the courseId.
    });
  }
  private loadCourse(courseId: string): void { //The loadCourse method takes a courseId parameter of type string and is responsible for loading the course details based on the courseId.
    this.course = this.courses.find(course => course.id === Number(courseId)) as Course;
    // console.log('Course:', this.course);
  }

  // Calling the enroll method when the button is clicked
  enroll(course: Course): void {
    Swal.fire({
      title: 'Good job!',
      text: `You have enrolled in ${course.name} course!`,
      icon: 'success',
      confirmButtonText: 'OK',
      buttonsStyling: false,
      
      customClass: {
          confirmButton: 'btn btn-primary px-4',
      },
      });
  }
}
