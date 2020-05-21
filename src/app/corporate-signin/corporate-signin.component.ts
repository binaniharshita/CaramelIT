import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { CorporateUserService } from '../shared-user/corporate/corporate-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corporate-signin',
  templateUrl: './corporate-signin.component.html',
  styleUrls: ['./corporate-signin.component.css']
})
export class CorporateSigninComponent implements OnInit {

  constructor(private corporateUserService: CorporateUserService, private router: Router) { }
  
  model= {
    emailAddress: '',
    password: ''
  };
 
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessage: string;
  
  ngOnInit() {
    if(this.corporateUserService.isLoggedIn())
    this.router.navigateByUrl('/profile-page');
  }

  onSubmit(corporateSignin: NgForm) {
    this.corporateUserService.login(corporateSignin.value).subscribe(
      res => {
        this.corporateUserService.setToken(res['token']);
        this.router.navigateByUrl('/profile-page');
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    )
  }
}
