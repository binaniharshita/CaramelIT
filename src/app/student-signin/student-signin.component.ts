import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-signin',
  templateUrl: './student-signin.component.html',
  styleUrls: ['./student-signin.component.css']
})
export class StudentSigninComponent implements OnInit {

  ssignin: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ssignin = this.fb.group({
      'emailAddress': ['',[Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      'password': ['', Validators.required]
    });
  }

}
