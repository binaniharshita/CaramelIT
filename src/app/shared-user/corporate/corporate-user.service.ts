import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { CorporateUser } from './corporate-user.model';

@Injectable({
  providedIn: 'root'
})
export class CorporateUserService {

  selectedCorporateUser: CorporateUser = {
    corporateName: '',
    emailAddress: '',
    mobileNumber: 0,
    others: ''
  };

  constructor(private http: HttpClient) { }

  postCorporateUser(corporateUser: CorporateUser){
    return this.http.post(environment.apiBaseUrl+'/corporate-register', corporateUser);
  }
}
