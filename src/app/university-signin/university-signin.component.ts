import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import{ UniversityUserService } from '../shared-user/university/university-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-signin',
  templateUrl: './university-signin.component.html',
  styleUrls: ['./university-signin.component.css']
})
export class UniversitySigninComponent implements OnInit {

  constructor(private universityUserService: UniversityUserService, private router: Router) { }
  
  model= {
    emailAddress: '',
    password: ''
  };
 
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessage: string;
  
  ngOnInit() {
    if(this.universityUserService.isLoggedIn())
    this.router.navigateByUrl('/profile-page');
  }

  onSubmit(universitySignin: NgForm) {
    this.universityUserService.login(universitySignin.value).subscribe(
      res => {
        this.universityUserService.setToken(res['token']);
        this.router.navigateByUrl('/profile-page');
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    )
  }

}
