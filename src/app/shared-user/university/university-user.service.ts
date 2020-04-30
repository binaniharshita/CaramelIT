import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { UniversityUser } from './university-user.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityUserService {

  selectedUniversityUser: UniversityUser = {
    collegeName: '',
    universityName: '',
    emailAddress: '',
    mobileNumber: 0,
    country: '',
    state: '',
    skillset: '',
    others: ''
  };

  constructor(private http: HttpClient) { }

  postUniversityUser(universityUser: UniversityUser){
    return this.http.post(environment.apiBaseUrl+'/university-register', universityUser);
  }
}
