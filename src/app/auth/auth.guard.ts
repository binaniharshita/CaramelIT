import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { StudentUserService } from '../shared-user/student/student-user.service';
import { InstructorUserService } from '../shared-user/instructor/instructor-user.service';
import { CorporateUserService } from '../shared-user/corporate/corporate-user.service';
import { UniversityUserService } from '../shared-user/university/university-user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(private studentUserService: StudentUserService, 
              private instructorUserService: InstructorUserService,
              private corporateUserService: CorporateUserService,
              private universityUserService: UniversityUserService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.studentUserService.isLoggedIn()){
        this.router.navigateByUrl('student-signin');
        this.studentUserService.deleteToken();
        return false;
      } else if(!this.instructorUserService.isLoggedIn()) {
        this.router.navigateByUrl('instructor-signin');
        this.instructorUserService.deleteToken();
      } else if(!this.corporateUserService.isLoggedIn()){
        this.router.navigateByUrl('corporate-signin');
        this.corporateUserService.deleteToken();
      } else if(!this.universityUserService.isLoggedIn()) {
        this.router.navigateByUrl('university-signin');
        this.universityUserService.deleteToken();
      }
    return true;
  }
}
