import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course.model';


@Component({
  selector: 'app-view-particular-course',
  templateUrl: './view-particular-course.component.html',
  styleUrls: ['./view-particular-course.component.css']
})
export class ViewParticularCourseComponent implements OnInit {
  id: string;
  course: Course;

  constructor( private route: ActivatedRoute, private courseService: CourseService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.course = this.courseService.getCourse(this.id);
    console.log(this.id);
    console.log(this.course);

  }


}
