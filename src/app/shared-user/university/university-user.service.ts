import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { UniversityUser } from './university-user.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityUserService {

  selectedUniversityUser: UniversityUser = {
    user_type: 'University',
    collegeName: '',
    universityName: '',
    emailAddress: '',
    mobileNumber: 0,
    password: '',
    country: '',
    state: '',
    skillset: '',
    others: ''
  };


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };
  constructor(private http: HttpClient) { }

  //http methods

  postUniversityUser(universityUser: UniversityUser){
    return this.http.post(environment.apiBaseUrl+'/university-register', universityUser,this.noAuthHeader);
  }
  
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/university-authenticate', authCredentials,this.noAuthHeader);
  }

  getUniversityProfile() {
    return this.http.get(environment.apiBaseUrl+'/universityProfile');
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
      return userPayload.exp > Date.now() / 1000;
    }
    else
      return false;
  }
}
