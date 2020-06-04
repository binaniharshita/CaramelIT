import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-course-skills',
  templateUrl: './user-course-skills.component.html',
  styleUrls: ['./user-course-skills.component.css']
})
export class UserCourseSkillsComponent implements OnInit {

  skills: string[] = ["HTML", "CSS", "Javascript", "UI", "Bootstrap", "Icon", "Graphics", "Apple OS", "Android", "Web Design"]
  instructorName: string = "John Doe";

  constructor() { }

  ngOnInit(): void {
  }

}
