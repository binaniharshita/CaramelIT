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

  serverErrorMessage: string;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  model= {
    emailAddress: '',
    password: ''
  }


  constructor(private studentUserService: StudentUserService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(studentSignin: NgForm) {
    this.studentUserService.login(studentSignin.value).subscribe(
      res => {
        this.studentUserService.setToken(res['token']);
        this.router.navigateByUrl('/profile-page');
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    )
  }

}
