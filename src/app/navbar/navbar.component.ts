import { Component, OnInit } from '@angular/core';

import { StudentUserService } from '../shared-user/student/student-user.service';
import { Router } from "@angular/router";
import { InstructorUserService } from '../shared-user/instructor/instructor-user.service';
import { CorporateUserService } from '../shared-user/corporate/corporate-user.service';
import { UniversityUserService } from '../shared-user/university/university-user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userType: string = "";
  studentLogin: boolean;

  constructor(private studentUserService: StudentUserService,
    private instructorUserService: InstructorUserService, 
    private corporateUserService: CorporateUserService,
    private universityUserService: UniversityUserService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.studentUserService.isLoggedIn()){
      this.studentLogin = this.studentUserService.isLoggedIn();
      //window.alert(this.studentUserService.selectedStudentUser.user_type + " " + this.studentLogin);
      this.userType = this.studentUserService.selectedStudentUser.user_type;
    }
  }

  


  onLogout(){
    if(this.studentUserService.selectedStudentUser.user_type="Student") {
    this.studentUserService.deleteToken();
    this.router.navigate(['student-signin']);
    }
  }

}
