import { Component, OnInit } from '@angular/core';

import{ FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-instructor-signin',
  templateUrl: './instructor-signin.component.html',
  styleUrls: ['./instructor-signin.component.css']
})
export class InstructorSigninComponent implements OnInit {

  isignin: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isignin = this.fb.group({
      'emailAddress': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

}
