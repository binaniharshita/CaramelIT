import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  stud_reg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.stud_reg = this.fb.group({
      'firstName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'emailAddress': ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      'mobileNumber': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      'dateOfBirth': ['',Validators.required],
      'country': ['',Validators.required],
      'state': ['',Validators.required],
      'college': ['',Validators.required],
      'skillset': ['',Validators.required]
    });
  }

}
