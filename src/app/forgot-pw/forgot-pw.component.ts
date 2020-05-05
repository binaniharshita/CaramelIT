import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.css']
})
export class ForgotPwComponent implements OnInit {

  forgot_pw: FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  isValidForm: boolean = true;

  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router,) { }

  ngOnInit(): void {
    this.forgot_pw = this.fb.group({
      'emailAddress': ['',[Validators.required, Validators.pattern('[a-z0-9.@]*')]]
    });
  }

  RequestResetUser(form) {
    console.log(form)
    if (form.valid) {
      this.isValidForm = true;
      this.authService.requestReset(this.forgot_pw.value).subscribe(
        data => {
          this.forgot_pw.reset();
          this.successMessage = "Reset password link send to email sucessfully.";
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['sign-in']);
          }, 3000);
        },
        err => {

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    } else {
      this.isValidForm = false;
    }
  }

}
