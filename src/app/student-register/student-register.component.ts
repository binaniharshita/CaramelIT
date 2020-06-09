import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { StudentUser, ProfessionalUser } from '../shared-user/student/student-user.model';
import { StudentUserService } from '../shared-user/student/student-user.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
  animations: [
    trigger('loadForm', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class StudentRegisterComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;
  studentForm: StudentUser;
  professionalForm: ProfessionalUser;
  selectedRole: string;
  basic = 0;
  userCount = 0;
  count1 = 0;
  count2 = 0;
  skills = [];
  basic_skills = ['html','css','bootstrap','materialize css','angular','react','vue','spring','scss','php','html5','javascript','ember','ruby','sass','typescript',''];
  show = false;

  constructor(public studentUserService: StudentUserService) { }

  ngOnInit(): void {
  }

  selectChangeHandler (event: any) {
    this.selectedRole = event.target.value;
    //console.log(this.selectedRole);
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = true;
  }

  onSubmit(studentRegForm: NgForm){
    //console.log(studentRegForm.value);
    //console.log(studentRegForm.controls['skill'].value);
    this.studentForm = studentRegForm.value;
    this.professionalForm = studentRegForm.value;
    if(this.studentForm.userRole === 'Student'){
      if(this.studentForm.skillset.indexOf(',')) { 
      this.skills = this.studentForm.skillset.split(','); 
      if(this.skills[0]){this.studentForm.skill1 = this.skills[0].trim(); this.count1++;}
      if(this.skills[1]){this.studentForm.skill2 = this.skills[1].trim(); this.count1++;}
      if(this.skills[2]){this.studentForm.skill3 = this.skills[2].trim(); this.count1++;}
      if(this.skills[3]){this.studentForm.skill4 = this.skills[3].trim(); this.count1++;}
      if(this.skills[4]){this.studentForm.skill5 = this.skills[4].trim(); this.count1++;}
      if(this.skills[5]){this.studentForm.skill6 = this.skills[5].trim(); this.count1++;}
      }
      else { this.studentForm.skill1 = this.studentForm.skillset; this.count1++; }
      this.studentForm.noOfSkill = this.count1.toString();
      for(let i = 0; i < this.basic_skills.length; i++){
        for( let j = 0; j < this.skills.length; j++) {
          if(this.basic_skills[i].toLowerCase()===this.skills[j].toLowerCase()) {
            this.basic++;
          }
        }
      }
      if(this.basic < 5) {
        this.studentForm.user_id  = this.studentForm.user_id.concat('SNSkills_');
      }
      else {
        this.studentForm.user_id  = this.studentForm.user_id.concat('SWSkills_');
      }
      studentRegForm.setValue(this.studentForm);
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
        });
    }
    else {
      this.skills = this.professionalForm.skillset.split(',');
      if(this.skills[0]){this.studentForm.skill1 = this.skills[0].trim(); this.count2++;}
      if(this.skills[1]){this.studentForm.skill2 = this.skills[1].trim(); this.count2++;}
      if(this.skills[2]){this.studentForm.skill3 = this.skills[2].trim(); this.count2++;}
      if(this.skills[3]){this.studentForm.skill4 = this.skills[3].trim(); this.count2++;}
      if(this.skills[4]){this.studentForm.skill5 = this.skills[4].trim(); this.count2++;}
      if(this.skills[5]){this.studentForm.skill6 = this.skills[5].trim(); this.count2++;}
      this.professionalForm.noOfSkill = this.count2.toString();
      if(this.professionalForm.userRole === 'IT Professional')
      { this.professionalForm.user_id = 'ITP'; }
      else
      { this.professionalForm.user_id = 'NITP'; }
      studentRegForm.setValue(this.professionalForm);
      console.log(studentRegForm.value);
      this.studentUserService.postProfessionalUser(studentRegForm.value).subscribe(
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
        });
    }
  }


  resetForm(studentForm: NgForm){
    this.studentUserService.selectedStudentUser = {
      user_type: 'Student',
      user_id: '',
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
      user_id: '',
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
