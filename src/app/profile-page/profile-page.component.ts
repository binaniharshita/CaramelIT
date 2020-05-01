import { Component, OnInit } from '@angular/core';

import { StudentUserService } from '../shared-user/student/student-user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile-page',
  template: `
  <table *ngIf="userDetails" class="table-fill">
  <thead>
      <tr>
          <th colspan="2" class="text-center">User Profile</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>First Name</td>
          <td>{{userDetails.firstName}}</td>
      </tr>
      <tr>
          <td>Last Name</td>
          <td>{{userDetails.lastName}}</td>
      </tr>
      <tr>
          <td>Email</td>
          <td>{{userDetails.emailAddress}}</td>
      </tr>
      <tr>
          <td colspan="2" class="text-center">
              <input type="button" (click)="onLogout()" value="Logout" />
          </td>
      </tr>
  </tbody>
</table>
  `,
  styles: [
  ]
})
export class ProfilePageComponent implements OnInit {
  userDetails;

  constructor(private studentUserService: StudentUserService, private router: Router) { }

  ngOnInit(): void {
    this.studentUserService.getStudentProfile().subscribe(
      res => {
        this.userDetails = res['student'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }


  
  onLogout(){
    this.studentUserService.deleteToken();
    this.router.navigate(['']);
  }


}
