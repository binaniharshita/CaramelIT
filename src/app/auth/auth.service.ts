import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  requestReset(body): Observable<any> {
    return this.http.post(`${BASEURL}/student-req-reset-password`, body);
  }

  newPassword(body): Observable<any> {
    return this.http.post(`${BASEURL}/student-new-password`, body);
  }

  ValidPasswordToken(body): Observable<any> {
    return this.http.post(`${BASEURL}/valid-password-token`, body);
  }
}
