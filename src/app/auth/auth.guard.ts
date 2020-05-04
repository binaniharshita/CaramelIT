import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { StudentUserService } from '../shared-user/student/student-user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private userService: StudentUserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.userService.isLoggedIn()){
        this.router.navigateByUrl('student-signin');
        this.userService.deleteToken();
        return false;
      }
    return true;
  }
  
}
