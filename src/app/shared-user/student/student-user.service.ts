import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StudentUser } from './student-user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentUserService {

  selectedStudentUser: StudentUser = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    mobileNumber: '',
    dateOfBirth:  '',
    country: '',
    state: '',
    collegeName: '',
    skillset: ''
  };

  constructor(private http: HttpClient) { }

  postStudentUser(studentUser: StudentUser){
    return this.http.post(environment.apiBaseUrl+'/student-register', studentUser);
  }
}
