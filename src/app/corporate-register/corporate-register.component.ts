import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-corporate-register',
  templateUrl: './corporate-register.component.html',
  styleUrls: ['./corporate-register.component.css']
})

export class CorporateRegisterComponent implements OnInit {

  corp_reg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.corp_reg = this.fb.group({
      'corporateName': ['',Validators.required],
      'emailAddress': ['',Validators.required],
      'mobileNumber': ['',[Validators.required,Validators.minLength(10)]],
      'others': ['']
    });
  }

}
