import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { StudentUserService } from '../shared-user/student-user.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
  providers: [StudentUserService]
})
export class StudentRegisterComponent implements OnInit {
  
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessage: string;

  constructor(public studentUserService: StudentUserService) { }

  ngOnInit(): void {
  }

  onSubmit(studentRegForm: NgForm){
    this.studentUserService.postStudentUser(studentRegForm.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage = false, 4000);
      },
      err => {
        if (err.status == 422){
          this.serverErrorMessage = err.error.join('<br>');
        }
        else{
          this.serverErrorMessage = 'Something went wrong. Please contact Admin.';
        }
      }
    );
  }


  resetForm(studentForm: NgForm){
    this.studentUserService.selectedStudentUser = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      mobileNumber: '',
      dateOfBirth:  '', 
      country: '',
      state: '',
      collegeName: '',
      skillset: ''
    }
    studentForm.resetForm();
    this.serverErrorMessage = '';
  }

}
