import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  model = {
    fullName: '',
    emailAddress: '',
    mobileNumber: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(adminRegForm: NgForm){
    console.log(adminRegForm);
  }
}
