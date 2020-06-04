import { Component, OnInit } from '@angular/core';

import { Project, MINIPROJECTS, COURSEPROJECTS } from './project';

@Component({
  selector: 'app-course-projects-tab',
  templateUrl: './course-projects-tab.component.html',
  styleUrls: ['./course-projects-tab.component.css']
})
export class CourseProjectsTabComponent implements OnInit {

  miniProjects: Project[] = MINIPROJECTS;
  projects: Project[] = COURSEPROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
