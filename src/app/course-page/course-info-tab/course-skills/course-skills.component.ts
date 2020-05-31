import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-skills',
  templateUrl: './course-skills.component.html',
  styleUrls: ['./course-skills.component.css']
})
export class CourseSkillsComponent implements OnInit {

  skills: string[] = ["HTML", "CSS", "Javascript", "UI", "Bootstrap", "Icon", "Graphics", "Apple OS", "Android", "Web Design"]
  instructorName: string = "John Doe";

  constructor() { }

  ngOnInit(): void {
  }

}
