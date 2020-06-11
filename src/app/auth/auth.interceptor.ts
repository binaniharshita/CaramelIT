import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";

import { StudentUserService } from '../shared-user/student/student-user.service';
import { InstructorUserService } from '../shared-user/instructor/instructor-user.service';
import { CorporateUserService } from '../shared-user/corporate/corporate-user.service';
import { UniversityUserService } from '../shared-user/university/university-user.service';



@Injectable() 
export class AuthInterceptor implements HttpInterceptor{

    constructor(private studentUserService: StudentUserService, 
        private instructorUserService: InstructorUserService,
        private corporateUserService: CorporateUserService,
        private universityUserService: UniversityUserService,
        private router: Router) {}


    intercept(req: HttpRequest<any>, next: HttpHandler){
        if(req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            let clonereq = req.clone();
            if(this.studentUserService.isLoggedIn()) { clonereq = req.clone({ headers: req.headers.set("Authorization", " Bearer " + this.studentUserService.getToken())}); }
            else if(this.instructorUserService.isLoggedIn()) { clonereq = req.clone({ headers: req.headers.set("Authorization", " Bearer " + this.instructorUserService.getToken())}); }
            else if(this.corporateUserService.isLoggedIn()) { clonereq = req.clone({ headers: req.headers.set("Authorization", " Bearer " + this.corporateUserService.getToken())}); }
            else if(this.universityUserService.isLoggedIn()) { clonereq = req.clone({ headers: req.headers.set("Authorization", " Bearer " + this.universityUserService.getToken())}); }
            return next.handle(clonereq).pipe(
                tap(
                    event => { },
                    err => {
                        if(err.error.auth == false) 
                            this.router.navigateByUrl('');
                    }
                )
            );

        }
    }
}