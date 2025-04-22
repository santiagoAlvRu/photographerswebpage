import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
contactUs:FormGroup=new FormGroup ({
  fname:new FormControl("",[Validators.required]),
  lname:new FormControl("", [Validators.required]),
  country:new FormControl("Austria",[Validators.required]),
  province:new FormControl("", [Validators.required]),
  street:new FormControl("", [Validators.required]),
  email:new FormControl("",[Validators.required, Validators.email]),
  isagree:new FormControl(false,Validators.requiredTrue),
});
onUserSave() {
  const formValue = this.contactUs.value;
  console.log(formValue);
}

resetForm() {
this.contactUs.reset();
}

}
