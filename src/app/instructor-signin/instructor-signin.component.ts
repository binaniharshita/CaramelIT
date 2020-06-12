import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { InstructorUserService } from '../shared-user/instructor/instructor-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-signin',
  templateUrl: './instructor-signin.component.html',
  styleUrls: ['./instructor-signin.component.css']
})
export class InstructorSigninComponent implements OnInit {

  constructor(private instructorUserService: InstructorUserService, private router: Router) { }

  model = {
    emailAddress: '',
    password: ''
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessage: string;

  ngOnInit() {
    if (this.instructorUserService.isLoggedIn()){
      this.router.navigateByUrl('/instructor-dashboard');
    }
  }

  onSubmit(instSigninForm: NgForm) {
    this.instructorUserService.login(instSigninForm.value).subscribe(
      res => {
        this.instructorUserService.setToken(res['token']);
        this.router.navigateByUrl('/instructor-dashboard');
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    )
  }

}
