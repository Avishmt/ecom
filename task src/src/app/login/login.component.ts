import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  // loginForm = FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // alert('ok');
    if (this.loginForm.invalid) {
      return;
    }

    const data = {
      email: this.f.email.value,
      password: this.f.password.value,
    };

    sessionStorage.setItem('userSession', JSON.stringify(data));
    console.log(data);
  }
}
