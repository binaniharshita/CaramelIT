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

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };
  constructor(private http: HttpClient) { }

  //http methods

  postStudentUser(studentUser: StudentUser){
    return this.http.post(environment.apiBaseUrl+'/student-register', studentUser,this.noAuthHeader);
  }
  
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/profile-page', authCredentials,this.noAuthHeader);
  }

  getStudentProfile() {
    return this.http.get(environment.apiBaseUrl+'/profile-page');
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
      return userPayload.exo > Date.now() / 1000;
    }
    else
      return false;
  }
}
