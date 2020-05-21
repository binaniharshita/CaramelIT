import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { AdminService } from '../shared-user/admin/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;

  constructor(public admin: AdminService) { }

  ngOnInit(): void {
    
  }

  onSubmit(adminRegForm: NgForm){
    this.admin.postAdmin(adminRegForm.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage = false, 4000);
        this.resetForm(adminRegForm);
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


  resetForm(adminForm: NgForm){
    this.admin.selectedAdmin = {
      adminName: '',
      emailAddress: '',
      mobileNumber: '',
      password: ''
    };
    adminForm.resetForm();
    this.serverErrorMessage = '';
  }

}
