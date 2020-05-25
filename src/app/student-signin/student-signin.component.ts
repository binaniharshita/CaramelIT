import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { StudentUserService } from '../shared-user/student/student-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-signin',
  templateUrl: './student-signin.component.html',
  styleUrls: ['./student-signin.component.css']
})
export class StudentSigninComponent implements OnInit {
  constructor(private studentUserService: StudentUserService, private router: Router) { }

  model= {
    emailAddress: '',
    password: ''
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessage: string;

  ngOnInit() {
    if(this.studentUserService.isLoggedIn())
    this.router.navigateByUrl('/student-dashboard');
  }

  onSubmit(studentSignin: NgForm) {
    this.studentUserService.login(studentSignin.value).subscribe(
      res => {
        this.studentUserService.setToken(res['token']);
        this.router.navigateByUrl('/student-dashboard');
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    )
  }
}
