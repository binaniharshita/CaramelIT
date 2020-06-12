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
            let clonereq;
            let s_user = JSON.parse(this.studentUserService.getToken());
            let i_user = JSON.parse(this.instructorUserService.getToken());
            let c_user = JSON.parse(this.corporateUserService.getToken());
            let u_user = JSON.parse(this.universityUserService.getToken());
            if(s_user)
                clonereq = req.clone({ headers: req.headers.set("Authorization", " Bearer " + this.studentUserService.getToken()) });
            if(i_user)
                clonereq = req.clone({ headers: req.headers.set("Authorization", " Bearer " + this.instructorUserService.getToken()) });
            if(c_user)
                clonereq = req.clone({ headers: req.headers.set("Authorization", " Bearer " + this.corporateUserService.getToken()) });
            if(u_user)
                clonereq = req.clone({ headers: req.headers.set("Authorization", " Bearer " + this.universityUserService.getToken()) });
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