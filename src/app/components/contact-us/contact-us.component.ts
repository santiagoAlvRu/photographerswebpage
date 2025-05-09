import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
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
if(this.contactUs.valid) {
this.contactUs.reset();
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your form has been submitted!",
  showConfirmButton: false,
  timer: 1500
});
} else {
  this.contactUs.markAllAsTouched();
}
}

ngOnInit(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
