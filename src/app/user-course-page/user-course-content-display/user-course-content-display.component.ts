import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/course';

@Component({
  selector: 'app-user-course-content-display',
  templateUrl: './user-course-content-display.component.html',
  styleUrls: ['./user-course-content-display.component.css']
})
export class UserCourseContentDisplayComponent implements OnInit {

  @Input()
  course: Course;

  courseName: string;
  lectures: string[] = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5", "Topic 6", "Topic 7", "Topic 8", "Topic 9","Topic 10", "Topic 11",
  "Topic 12", "Topic 13","Topic 14","Topic 15","Topic 16", "Topic 17", "Topic 18","Topic 19"];

  slide: string = "../../assets/images/CoursePage/slide.jpg"

  constructor() {}

  ngOnInit(): void {
    this.courseName = this.course.name;
  }

}
