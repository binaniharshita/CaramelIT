import { Component, OnInit } from '@angular/core';
import { CourseInfo, COURSEINFO } from './courseinfo'

@Component({
  selector: 'app-user-course-info-dropdowns',
  templateUrl: './user-course-info-dropdowns.component.html',
  styleUrls: ['./user-course-info-dropdowns.component.css']
})
export class UserCourseInfoDropdownsComponent implements OnInit {

  // title, description
  info: CourseInfo[] = COURSEINFO;

  constructor() { }

  ngOnInit(): void {
  }

}
