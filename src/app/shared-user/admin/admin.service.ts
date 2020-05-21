import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Admin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  selectedAdmin: Admin = {
    adminName: '',
    emailAddress: '',
    mobileNumber: '',
    password: ''
  };
  
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'}) };
  constructor(private http: HttpClient) { }

  //http methods

  postAdmin(admin: Admin){
    return this.http.post(environment.apiBaseUrl+'/admin-register', admin, this.noAuthHeader);
  }
  
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/admin-authenticate', authCredentials,this.noAuthHeader);
  }

  getAdminProfile() {
    return this.http.get(environment.apiBaseUrl+'/adminProfile');
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
