import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DetailsComponent } from './components/home/details/details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'details/:photoId', component: DetailsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'customers', component: CustomersComponent},
    {path:'contact-us', component:ContactUsComponent}
];