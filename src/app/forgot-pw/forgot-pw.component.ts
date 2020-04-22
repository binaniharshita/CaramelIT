import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.css']
})
export class ForgotPwComponent implements OnInit {

  forgot_pw: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.forgot_pw = this.fb.group({
      'emailAddress': ['',[Validators.required, Validators.pattern('[a-z0-9.@]*')]]
    });
  }

}
