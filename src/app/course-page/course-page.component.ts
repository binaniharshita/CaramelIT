import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course';
import { CourseService } from '../services/course.service';
import { Lecture } from '../shared/lecture';
import { Chapter } from '../shared/chapter';
import { StudentUserService } from '../shared-user/student/student-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  selectedCourse: Course = this.courseService.selectedCourse();
  selectedChapter: Chapter[]  = this.selectedCourse.chapter;
  //selectedLectures: Lecture[] = this.selectedChapter.lecture;
  panelOpenState = false;
  selectedLecture: Lecture;
  addedToCart: boolean = false;

  constructor(private courseService: CourseService,private studentUserService: StudentUserService, private router: Router) { }

  ngOnInit(): void {
    
  this.selectedCourse = this.courseService.selectedCourse();
  this.selectedChapter = this.selectedCourse.chapter;
    //this.selectedChapter = this.selectedCourse.chapter.values();
    //this.selectedLectures = this.selectedChapter.lecture;
  }

  addToCart(product: Course) {
    if(this.studentUserService.isLoggedIn()) {
    this.courseService.postCourseToCart(product).subscribe((res) => {
      console.log('Item successfully created!');
    }, (error) => {
      console.log(error);
    });
    window.alert("Your product has been added to cart!");
    }
    else{
      this.router.navigateByUrl('/student-signin');
    }
  }
}
