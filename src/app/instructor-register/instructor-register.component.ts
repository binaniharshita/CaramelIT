import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-instructor-register',
  templateUrl: './instructor-register.component.html',
  styleUrls: ['./instructor-register.component.css']
})
export class InstructorRegisterComponent implements OnInit {

  inst_reg: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inst_reg = this.fb.group({
      'firstName': ['',Validators.required],
      'lastName': ['',Validators.required],
      'emailAddress': ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      'mobileNumber': ['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
      'subjects': ['',Validators.required],
      'workingHours': ['',Validators.required],
      'experience': ['',Validators.required],
      'profileDetails': ['',Validators.required]
    });
  }

}
