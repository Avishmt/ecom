import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  constructor(private fb: FormBuilder) {}

  regForm = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  get f() {
    return this.regForm.controls;
  }
  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;

    if (this.regForm.invalid) {
      return;
    }
    const data = {
      firstName: this.f.fname.value,
      lastName: this.f.lname.value,
      email: this.f.email.value,
      password: this.f.password.value,
    };

    console.log(data);
  }
}
