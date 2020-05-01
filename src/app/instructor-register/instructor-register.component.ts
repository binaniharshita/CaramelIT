import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { InstructorUserService } from '../shared-user/instructor/instructor-user.service'

@Component({
  selector: 'app-instructor-register',
  templateUrl: './instructor-register.component.html',
  styleUrls: ['./instructor-register.component.css']
})
export class InstructorRegisterComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;

  
  constructor(public instructorUserService: InstructorUserService) { }

  ngOnInit(): void {
  }

  onSubmit(instructorRegForm: NgForm){
    this.instructorUserService.postInstructorUser(instructorRegForm.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage = false, 4000);
        this.resetForm(instructorRegForm);
      },
      err => {
        if(err.status === 422){
          this.serverErrorMessage = err.error.join("<br/>");
        }
        else{
          this.serverErrorMessage = 'Something went wrong. Please contact Admin.';
        }
      }
    );
  }

  resetForm(instructorForm: NgForm){
    this.instructorUserService.selectedInstructorUser = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      mobileNumber: 0,
      subjects: '',
      workingHours: '',
      experience: '',
      profileDetails: ''
    };
    instructorForm.resetForm();
    this.serverErrorMessage = '';
  }

}
