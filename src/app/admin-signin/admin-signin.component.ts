import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
  admin_signin: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.admin_signin = this.fb.group({
      'emailAddress': ['',[Validators.required,Validators.pattern('[a-z0-9.@]*')]],
      'password': ['',Validators.required]
    });
  }

}
