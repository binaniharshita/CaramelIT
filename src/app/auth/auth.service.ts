import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/register`, body);
  }

  loginUser(body): Observable<any> {
    return this.http.post(`${BASEURL}/login`, body);
  }

  requestReset(body): Observable<any> {
    return this.http.post(`${BASEURL}/student-req-reset-password`, body);
  }

  newPassword(body): Observable<any> {
    return this.http.post(`${BASEURL}/new-password`, body);
  }

  ValidPasswordToken(body): Observable<any> {
    return this.http.post(`${BASEURL}/valid-password-token`, body);
  }
  
}
