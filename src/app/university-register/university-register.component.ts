import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-university-register',
  templateUrl: './university-register.component.html',
  styleUrls: ['./university-register.component.css']
})

export class UniversityRegisterComponent implements OnInit {
    
  heading ="New College/University Registration";

  univ_reg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.univ_reg = this.fb.group({
      'collegeName': ['', Validators.required],
      'universityName': ['', Validators.required],
      'emailAddress': ['', [Validators.required,Validators.pattern('[a-z0-9_.@]*')]],
      'mobileNumber': ['', [Validators.required,Validators.minLength(10)]],
      'country': ['', Validators.required],
      'state': ['', Validators.required],
      'skillset': ['', Validators.required],
      'others': ['']
    });
  }

}
