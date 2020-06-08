import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { CorporateUserService } from '../shared-user/corporate/corporate-user.service';

@Component({
  selector: 'app-corporate-register',
  templateUrl: './corporate-register.component.html',
  styleUrls: ['./corporate-register.component.css']
})

export class CorporateRegisterComponent implements OnInit {

  showSuccessMessage: boolean;
  serverErrorMessage: string;

  constructor(public corporateUserService: CorporateUserService) { }

  ngOnInit(): void {
    
  }

  onSubmit(corporateRegForm: NgForm){
    this.corporateUserService.postCorporateUser(corporateRegForm.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage = false, 4000);
        this.resetForm(corporateRegForm);
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


  resetForm(corporateForm: NgForm){
    this.corporateUserService.selectedCorporateUser = {
      user_type: 'Corporate',
      corporateName: '',
      emailAddress: '',
      mobileNumber: '',
      password: '',
      others: ''
    };
    corporateForm.resetForm();
    this.serverErrorMessage = '';
  }

}
