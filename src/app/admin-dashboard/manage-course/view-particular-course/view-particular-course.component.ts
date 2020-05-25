import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-view-particular-course',
  templateUrl: './view-particular-course.component.html',
  styleUrls: ['./view-particular-course.component.css']
})
export class ViewParticularCourseComponent implements OnInit {
  id: string;
  courses: Course[] = [];
  isLoading = false;
  private courseSubs: Subscription;

  constructor( private route: ActivatedRoute, private courseService: CourseService ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.courseService.getCourses();
    this.courseSubs = this.courseService.getCoursesUpdateListener()
      .subscribe((courses: Course[]) => {
        this.isLoading = false;
        this.courses = courses;
      });

  }


}
