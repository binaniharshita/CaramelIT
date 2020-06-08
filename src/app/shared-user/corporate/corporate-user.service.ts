import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { CorporateUser } from './corporate-user.model';

@Injectable({
  providedIn: 'root'
})
export class CorporateUserService {

  selectedCorporateUser: CorporateUser = {
    user_type: 'Corporate', 
    corporateName: '',
    emailAddress: '',
    mobileNumber: '',
    password: '',
    others: ''
  };
  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };
  constructor(private http: HttpClient) { }

  //http methods

  postCorporateUser(corporateUser: CorporateUser){
    return this.http.post(environment.apiBaseUrl+'/corporate-register', corporateUser, this.noAuthHeader);
  }
  
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/corporate-authenticate', authCredentials,this.noAuthHeader);
  }

  getCorporateProfile() {
    return this.http.get(environment.apiBaseUrl+'/corporateProfile');
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
