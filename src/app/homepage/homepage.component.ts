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

  selectedCourse: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourse();
  }

  onSelect(course: Course){
    this.selectedCourse = course;
  }
}
