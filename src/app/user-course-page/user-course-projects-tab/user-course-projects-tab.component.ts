import { Component, OnInit } from '@angular/core';

import { Project, MINIPROJECTS, COURSEPROJECTS } from './project';

@Component({
  selector: 'app-user-course-projects-tab',
  templateUrl: './user-course-projects-tab.component.html',
  styleUrls: ['./user-course-projects-tab.component.css']
})
export class UserCourseProjectsTabComponent implements OnInit {

  miniProjects: Project[] = MINIPROJECTS;
  projects: Project[] = COURSEPROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
