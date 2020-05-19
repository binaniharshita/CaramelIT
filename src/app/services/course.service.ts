import { Injectable } from '@angular/core';
import { COURSES } from '../shared/courses';
import { Course } from '../shared/course';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  displaycourse: Course;
  baseUri: string = 'http://localhost:3000/api';

  
  constructor(private http: HttpClient, private router: Router) { }
  getCourses(): Course[]{
    return COURSES;
  }

  displayCourse(course){
    this.displaycourse = course;
  }

  selectedCourse(): Course{
    return this.displaycourse;
  }

  postCourseToCart(course): Observable<any> {
   
    console.log(`${this.baseUri}/studcart/create`, JSON.stringify(course));
    const url = `${this.baseUri}/studcart/create`;
    //this.total += Number(course.price);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }).set('Content-Type', 'application/json')
    };
    let body = JSON.stringify(course);
    return this.http.post(url, body, httpOptions);
  }

  getCartCourses() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }).set('Content-Type', 'application/json')
    };
    return this.http.get(`${this.baseUri}/studcart/findall`);
  }

  deleteCourseFromCart(id): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }).set('Content-Type', 'application/json')
    };
    return this.http.delete(`${this.baseUri}/studcart/delete/${id}`,httpOptions).pipe(
      catchError(this.errorMgmt));
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
