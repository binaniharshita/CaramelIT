import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdminService } from '../shared-user/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
  constructor(private admin: AdminService, private router: Router) { }

  model = {
    emailAddress: '',
    password: ''
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessage: string;

  ngOnInit() {
    if (this.admin.isLoggedIn()){
      this.router.navigateByUrl('/profile-page');
    }
  }

  onSubmit(adminSignin: NgForm) {
    this.admin.login(adminSignin.value).subscribe(
      res => {
        this.admin.setToken(res['token']);
        this.router.navigateByUrl('/admin-dashboard');
      },
      err => {
        this.serverErrorMessage = err.error.message;
      }
    );
  }

}
