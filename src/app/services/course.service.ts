import { Injectable } from '@angular/core';
import { COURSES } from '../shared/courses';
import { Course } from '../shared/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  getCourse(): Course[]{
    return COURSES;
  }
}
