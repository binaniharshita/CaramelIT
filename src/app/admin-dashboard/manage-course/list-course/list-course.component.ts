import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses: Course[] = [];
  private coursesSubs: Subscription;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses();
    // tslint:disable-next-line: max-line-length
    this.coursesSubs = this.courseService.getCoursesUpdateListener()
    .subscribe((courses: Course[]) => { this.courses = courses; });
  }
  ngOnDestory(){
    this.coursesSubs.unsubscribe();
  }
  onDeleteCourse(courseId: string){
    this.courseService.deleteCourse(courseId);

  }

}
