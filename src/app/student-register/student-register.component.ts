import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgForm } from '@angular/forms';

import { StudentUserService } from '../shared-user/student/student-user.service';
import { StudentUser } from '../shared-user/student/student-user.model';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;
  studentForm: StudentUser;
  selectedRole: string ="";

  constructor(public studentUserService: StudentUserService) { }

  ngOnInit(): void {
  }

  selectChangeHandler (event: any) {
    this.selectedRole = event.target.value;
    //console.log(this.selectedRole);
  }
  
  onSubmit(studentRegForm: NgForm){
    //console.log(studentRegForm.value);
    //console.log(studentRegForm.controls['skill'].value);
    this.studentForm = studentRegForm.value;
    this.studentForm.skill1 = this.studentForm.skillset.split(',')[0].trim();
    this.studentForm.skill2 = this.studentForm.skillset.split(',')[1].trim();
    this.studentForm.skill3 = this.studentForm.skillset.split(',')[2].trim();
    this.studentForm.skill4 = this.studentForm.skillset.split(',')[3].trim();
    this.studentForm.skill5 = this.studentForm.skillset.split(',')[4].trim();
    this.studentForm.skill6 = this.studentForm.skillset.split(',')[5].trim();
    this.studentForm.noOfSkill = '6';
    studentRegForm.setValue(this.studentForm);
    console.log(studentRegForm.value);

    if(this.selectedRole === 'Student') {
      console.log(studentRegForm.value);
    this.studentUserService.postStudentUser(studentRegForm.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage = false, 400);
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
    else {
      console.log(studentRegForm.value);
      this.studentUserService.postProfesionalUser(studentRegForm.value).subscribe(
        res=> {
          this.showSuccessMessage = true;
          setTimeout(()=> this.showSuccessMessage = false, 400);
          this.resetForm(studentRegForm);
        },
        err=> {
          if(err.status === 422) {
            this.serverErrorMessage = err.error.join("<br/>");
          }
          else{
            this.serverErrorMessage = 'Something went wrong. Please contact Admin.';
          }
        }
      );
    }
  }


  resetForm(studentForm: NgForm){
    this.studentUserService.selectedStudentUser = {
      user_type: 'Student',
      firstName: '',
      lastName: '',
      emailAddress: '',
      mobileNumber: '',
      dateOfBirth:  '', 
      password: '',
      userRole: '',
      country: '',
      state: '',
      collegeName: '',
      noOfSkill: '',
      skillset: '',
      skill1: '',
      skill2: '',
      skill3: '',
      skill4: '',
      skill5: '',
      skill6: ''
    };
    this.studentUserService.selectedProfessionalUser = {
      user_type: 'Student',
      firstName: '',
      lastName: '',
      emailAddress: '',
      mobileNumber: '',
      dateOfBirth:  '', 
      password: '',
      userRole: '',
      country: '',
      state: '',
      noOfSkill: '',
      skillset: '',
      skill1: '',
      skill2: '',
      skill3: '',
      skill4: '',
      skill5: '',
      skill6: '',
      currentOrg: '',
      yearsExperience: ''
    };
    studentForm.resetForm();
    this.serverErrorMessage = '';
  }


}
