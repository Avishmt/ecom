import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  RequiredValidator,

  Validators,
  Validator
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl:'./signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted: boolean = false;

  constructor(private FormBuilder: FormBuilder) {
    this.reactiveForm = this.FormBuilder.group({
      fname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
      lname:['',[Validators.required,Validators.minLength(4),Validators.maxLength(15)]],
      email:['', [Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.min(6), Validators.max(10)]],
      cpwd: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
   
     
    }
    
    );

  }
  get f() {
    return this.reactiveForm.controls;
  }
  onsubmit() {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
  }
  ngOnInit(): void {}
}
