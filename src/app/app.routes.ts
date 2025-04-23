import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DetailsComponent } from './components/home/details/details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'details/:photoId', component: DetailsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'customers', component: CustomersComponent},
    {path: 'contact-us', component:ContactUsComponent},
    {path: 'course-detail/:courseId', component: CourseDetailComponent}, //Here's the culprit. The route is defined with a parameter courseId, which is used to load the course details based on the courseId.

];