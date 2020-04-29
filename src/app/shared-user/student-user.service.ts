import { Injectable } from '@angular/core';
import { StudentUser } from './student-user.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
  }

  constructor(private http: HttpClient) { }

  postStudentUser(studentUser: StudentUser){
    return this.http.post(environment.apiBaseUrl+'/register', studentUser);
  }
}
