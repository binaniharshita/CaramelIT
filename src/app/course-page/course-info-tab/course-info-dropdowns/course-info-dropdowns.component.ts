import { Component, OnInit } from '@angular/core';
import { CourseInfo, COURSEINFO } from './courseinfo'

@Component({
  selector: 'app-course-info-dropdowns',
  templateUrl: './course-info-dropdowns.component.html',
  styleUrls: ['./course-info-dropdowns.component.css']
})
export class CourseInfoDropdownsComponent implements OnInit {

  // title, description
  info: CourseInfo[] = COURSEINFO;

  constructor() { }

  ngOnInit(): void {
  }

}
