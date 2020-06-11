import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StudentUser, ProfessionalUser } from './student-user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentUserService {
  sdata;
  pdata;

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
    skill6: '',
    currentOrg: '',
    yearsExperience: ''
  };

  /*selectedProfessionalUser: ProfessionalUser = {
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
  };*/

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };
  constructor(private http: HttpClient) { }

  //http methods

  postStudentUser(studentUser: StudentUser){
    return this.http.post(environment.apiBaseUrl+'/student-register', studentUser,this.noAuthHeader);
  }
  
  /*postProfessionalUser(professionalUser: ProfessionalUser){
    return this.http.post(environment.apiBaseUrl+'/professional-register', professionalUser,this.noAuthHeader);
  }*/
  

  studentLogin(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/student-authenticate', authCredentials,this.noAuthHeader) || this.http.post(environment.apiBaseUrl+'/professional-authenticate', authCredentials,this.noAuthHeader);;
  }

  /*professionalLogin(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/professional-authenticate', authCredentials,this.noAuthHeader);
  }*/

  getStudentProfile() {
    return this.http.get(environment.apiBaseUrl + '/studentProfile');
  }

  /*getStudentStatus() {
    this.http.get(environment.apiBaseUrl + '/studentProfile').subscribe(data=>{
      //console.log(data);
      this.sdata = data as string [];
    });
    return this.sdata.status;
  }*/

  /*getProfessionalProfile() {
    return this.http.get(environment.apiBaseUrl+'/professionalProfile');
  }*/

  /*getProfessionalStatus() {
    this.http.get(environment.apiBaseUrl + '/professonalProfile').subscribe(data=>{
      //console.log(data);
      this.pdata = data as string [];
      return this.pdata.status;
    });
  }*/

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
      //console.log(userPayload.exp > Date.now() / 1000);
      return userPayload.exp > Date.now() / 1000;
    }
    else
      return false;
  }
}
