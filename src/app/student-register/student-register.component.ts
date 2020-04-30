import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { StudentUserService } from '../shared-user/student/student-user.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
  providers: [StudentUserService]
})
export class StudentRegisterComponent implements OnInit {
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
        this.resetForm(studentRegForm);
      },
      err => {
        if (err.status === 422){
          this.serverErrorMessage = err.error.join("<br/>");
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
      mobileNumber: '',
      dateOfBirth:  '', 
      password: '',
      country: '',
      state: '',
      collegeName: '',
      skillset: ''
    };
    studentForm.resetForm();
    this.serverErrorMessage = '';
  }

}
