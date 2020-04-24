import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {
  cont_us: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cont_us = this.fb.group({
      'fullName': ['',Validators.required],
      'emailAddress': ['',[Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      'phoneNumber': ['', [Validators.required,Validators.minLength(10)]],
      'zipcode':  ['',Validators.required],
      'country':  ['',Validators.required],
      'category':  ['',Validators.required],
      'subcategory':  ['',Validators.required]
    });
  }
  date: number = new Date().getFullYear();
}
