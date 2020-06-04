import { Component, OnInit } from '@angular/core';
import { StudentUserService } from '../shared-user/student/student-user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  userDetails;
  showMenu = false;
  mainHover=false;
  constructor(private studentUserService: StudentUserService,private router: Router) { }

  ngOnInit(): void {
    /*this.studentUserService.getStudentProfile().subscribe(
      res => {
        this.userDetails = res['student'];
      },
      err => { 
        console.log(err);
        
      }
    );*/
  }
  
  onLogout(){
    this.studentUserService.deleteToken();
    this.router.navigate(['']);
  }


  showFiller = false;

}
