import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-corporate-signin',
  templateUrl: './corporate-signin.component.html',
  styleUrls: ['./corporate-signin.component.css']
})
export class CorporateSigninComponent implements OnInit {

  csignin: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.csignin = this.fb.group({
      'emailAddress': ['',[Validators.required,Validators.pattern('[a-z0-9.@]*')]],
      'password': ['',Validators.required]
    });
  }

}
