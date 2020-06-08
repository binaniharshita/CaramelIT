import { Component, OnInit } from '@angular/core';
import { InstructorUserService } from '../shared-user/instructor/instructor-user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-instructordashboard',
  templateUrl: './instructordashboard.component.html',
  styleUrls: ['./instructordashboard.component.css']
})
export class InstructordashboardComponent implements OnInit {
  title = 'dashboard';
  userDetails;
  showMenu = false;
  mainHover=false;

  constructor(private instructorUserService: InstructorUserService,private router: Router) { }

  ngOnInit(): void {
    /*this.instructorUserService.getInstructorProfile().subscribe(
      res => {
        this.userDetails = res['instructor'];
      },
      err => { 
        console.log(err);
      });*/
  }

  onLogout(){
    this.instructorUserService.deleteToken();
    this.router.navigate(['home']);
  }

}
