import { Component, OnInit, AfterContentInit } from '@angular/core';

import { StudentUserService } from '../shared-user/student/student-user.service';
import { Router } from '@angular/router';
import { InstructorUserService } from '../shared-user/instructor/instructor-user.service';
import { CorporateUserService } from '../shared-user/corporate/corporate-user.service';
import { UniversityUserService } from '../shared-user/university/university-user.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  userType = '';
  userDetails;
  showReg = true;
  studentLogin: boolean;
  instructorLogin: boolean;
  universityLogin: boolean;
  corporateLogin: boolean;

  constructor(private studentUserService: StudentUserService,
              private instructorUserService: InstructorUserService,
              private corporateUserService: CorporateUserService,
              private universityUserService: UniversityUserService,
              private router: Router) { }

  
  ngOnInit(): void {
    if (this.studentUserService.isLoggedIn()) {
      this.studentLogin = this.studentUserService.isLoggedIn();
      // window.alert(this.studentUserService.selectedStudentUser.user_type + " " + this.studentLogin);
      this.studentUserService.getStudentProfile().subscribe(
        res => {
          this.userDetails = res['student'];
        },
        err => { 
          console.log(err);
          
        }
      );
      this.userType = this.userDetails.user_type;
      this.showReg = false;
    }
    else if (this.instructorUserService.isLoggedIn()) {
      this.instructorLogin = this.instructorUserService.isLoggedIn();
      console.log(this.instructorUserService.selectedInstructorUser.user_type + " " + this.instructorLogin);
      this.userType = this.instructorUserService.selectedInstructorUser.user_type;
      this.showReg = false;
    }
    else if (this.corporateUserService.isLoggedIn()) {
      this.corporateLogin = this.corporateUserService.isLoggedIn();
      window.alert(this.instructorUserService.selectedInstructorUser.user_type + " " + this.instructorLogin);
      this.userType = this.corporateUserService.selectedCorporateUser.user_type;
      this.showReg = false;
    }
    else if (this.universityUserService.isLoggedIn()) {
      this.universityLogin = this.universityUserService.isLoggedIn();
      window.alert(this.instructorUserService.selectedInstructorUser.user_type + " " + this.instructorLogin);

      this.userType = this.universityUserService.selectedUniversityUser.user_type;
      this.showReg = false;
    }
  }

  onLogout() {
    if (this.studentUserService.selectedStudentUser.user_type === 'Student' && this.studentLogin) {
      this.studentUserService.deleteToken();
      this.router.navigate(['student-signin']);
      this.showReg = true;
    }
    else if (this.instructorUserService.selectedInstructorUser.user_type === 'Instructor' && this.instructorLogin) {
      this.studentUserService.deleteToken();
      this.router.navigate(['instructor-signin']);
      this.showReg = true;
    }
    else if (this.corporateUserService.selectedCorporateUser.user_type === 'Corporate' && this.corporateLogin) {
      this.studentUserService.deleteToken();
      this.router.navigate(['corporate-signin']);
      this.showReg = true;
    }
    else if (this.universityUserService.selectedUniversityUser.user_type === 'University' && this.universityLogin) {
      this.studentUserService.deleteToken();
      this.router.navigate(['university-signin']);
      this.showReg = true;
    }
  }

}
