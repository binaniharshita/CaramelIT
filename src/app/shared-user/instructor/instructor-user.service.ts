import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { InstructorUser } from './instructor-user.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorUserService {

  selectedInstructorUser: InstructorUser = {
    user_type: 'Instructor',
    firstName: '',
    lastName: '',
    emailAddress: '',
    mobileNumber: 0,
    password: '',
    subjects: '',
    workingHours: '',
    experience: '',
    profileDetails: ''
  };


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };
  constructor(private http: HttpClient) { }

  //http methods

  postInstructorUser(instructorUser: InstructorUser){
    return this.http.post(environment.apiBaseUrl+'/instructor-register', instructorUser,this.noAuthHeader);
  }
  
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/instructor-authenticate', authCredentials,this.noAuthHeader);
  }

  getInstructorProfile() {
    return this.http.get(environment.apiBaseUrl+'/instructorProfile');
  }

  //helper methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if(token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if(userPayload) {
      console.log(userPayload.exp > Date.now() / 1000);
      return userPayload.exp > Date.now() / 1000;
    }
    else
      return false;
  }
}
