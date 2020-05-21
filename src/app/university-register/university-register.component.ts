import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { UniversityUserService } from '../shared-user/university/university-user.service';

@Component({
  selector: 'app-university-register',
  templateUrl: './university-register.component.html',
  styleUrls: ['./university-register.component.css']
})

export class UniversityRegisterComponent implements OnInit {
    
  heading ="New College/University Registration";

  showSuccessMessage: boolean;
  serverErrorMessage: string;



  constructor(public universityUserService: UniversityUserService) { }

  ngOnInit(): void {
  }


  onSubmit(universityRegForm: NgForm){
    this.universityUserService.postUniversityUser(universityRegForm.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage = false, 4000);
        this.resetForm(universityRegForm);
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


  resetForm(universityForm: NgForm){
    this.universityUserService.selectedUniversityUser = {
      user_type: 'University',
      collegeName: '',
      universityName: '',
      emailAddress: '',
      mobileNumber: 0,
      password: '',
      country: '',
      state: '',
      skillset: '',
      others: ''
    };
    universityForm.resetForm();
    this.serverErrorMessage = '';
  }

}
