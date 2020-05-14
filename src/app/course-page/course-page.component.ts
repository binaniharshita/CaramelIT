import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course';
import { CourseService } from '../services/course.service';
import { Lecture } from '../shared/lecture';
import { Chapter } from '../shared/chapter';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  selectedCourse: Course = this.courseService.selectedCourse();
  selectedChapter: Chapter[]  = this.selectedCourse.chapter;
  selectedLectures: Lecture[] = this.selectedChapter.lecture;
  panelOpenState = false;
  selectedLecture: Lecture;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    //this.selectedChapter = this.selectedCourse.chapter.values();
    //this.selectedLectures = this.selectedChapter.lecture;
  }

  addToCart(product: Course) {
    this.courseService.postCourseToCart(product).subscribe((res) => {
      console.log('Item successfully created!');
    }, (error) => {
      console.log(error);
    }
    );
    window.alert("Your product has been added to cart!");
  }


}
