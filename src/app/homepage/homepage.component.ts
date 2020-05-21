import { Component, OnInit } from '@angular/core';
import { Course} from '../shared/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  onSelect(course: Course){
    this.courseService.displayCourse(course);
}
}
