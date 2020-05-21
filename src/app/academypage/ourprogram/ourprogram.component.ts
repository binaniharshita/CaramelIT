import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from '../../shared/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-ourprogram',
  templateUrl: './ourprogram.component.html',
  styleUrls: ['./ourprogram.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OurprogramComponent implements OnInit {

  divShow = false;
  courses: Course[];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
  onSelect(course: Course) {
    this.courseService.displayCourse(course);
  }

  onSoftwareDevelopmentClick() {
    this.divShow = !this.divShow;
  }

}
