import { Component, OnInit } from '@angular/core';

import{ FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-university-signin',
  templateUrl: './university-signin.component.html',
  styleUrls: ['./university-signin.component.css']
})
export class UniversitySigninComponent implements OnInit {

  usignin: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usignin = this.fb.group({
      'emailAddress': ['',[Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      'password': ['', Validators.required]
    });
  }

}
