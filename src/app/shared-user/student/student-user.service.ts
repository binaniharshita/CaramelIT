import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StudentUser, ProfessionalUser } from './student-user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentUserService {

  selectedStudentUser: StudentUser = {
    user_type: 'Student',
    user_id: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    userRole: '',
    mobileNumber: '',
    dateOfBirth:  '',
    country: '',
    state: '',
    collegeName: '',
    noOfSkill: '',
    skillset: '',
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: ''
  };

  selectedProfessionalUser: ProfessionalUser = {
    user_type: 'Student',
    user_id: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    userRole: '',
    mobileNumber: '',
    dateOfBirth:  '',
    country: '',
    state: '',
    noOfSkill: '',
    skillset: '',
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
    currentOrg: '',
    yearsExperience: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };
  constructor(private http: HttpClient) { }

  //http methods

  postStudentUser(studentUser: StudentUser){
    return this.http.post(environment.apiBaseUrl+'/student-register', studentUser,this.noAuthHeader);
  }
  
  postProfessionalUser(professionalUser: ProfessionalUser){
    return this.http.post(environment.apiBaseUrl+'/professional-register', professionalUser,this.noAuthHeader);
  }
  

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/student-authenticate', authCredentials,this.noAuthHeader);
  }

  getStudentProfile() {
    return this.http.get(environment.apiBaseUrl + '/studentProfile');
  }

  getProfessionalProfile() {
    return this.http.get(environment.apiBaseUrl+'/professionalProfile');
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
