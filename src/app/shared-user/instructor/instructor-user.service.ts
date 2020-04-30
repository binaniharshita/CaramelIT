import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { InstructorUser } from './instructor-user.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorUserService {

  selectedInstructorUser: InstructorUser = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    mobileNumber: 0,
    subjects: '',
    workingHours: '',
    experience: '',
    profileDetails: ''
  };

  constructor(private http: HttpClient) { }

  postInstructorUser(instructorUser: InstructorUser){
    return this.http.post(environment.apiBaseUrl+'/instructor-register', instructorUser);
  }
}
