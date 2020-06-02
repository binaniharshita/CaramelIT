import { Component, OnInit } from '@angular/core';
import { Course } from '../admin-dashboard/manage-course/course.model';
import { CourseService } from '../admin-dashboard/manage-course/course.service';
import { Lecture } from '../shared/lecture';
import { Chapter } from '../shared/chapter';
import { StudentUserService } from '../shared-user/student/student-user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  id: string;
  selectedCourse : Course;
  courseSubs : Subscription;

  // selectedCourse: Course = this.courseService.selectedCourse();
  // selectedChapter: Chapter[]  = this.selectedCourse.chapter;
  //selectedLectures: Lecture[] = this.selectedChapter.lecture;
  panelOpenState = false;
  selectedLecture: Lecture;
  addedToCart: boolean = false;

  constructor(private route: ActivatedRoute,private courseService: CourseService,private studentUserService: StudentUserService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.courseService.getCourses();
    this.courseSubs = this.courseService.getCoursesUpdateListener()
      .subscribe((courses: Course[]) => {
       
        
        this.selectedCourse = courses.filter(c => c.id === this.id)[0];
        console.log(this.selectedCourse);
      });
    
  // CODE BY ARYA AND SHRIYA
  //   this.selectedCourse = this.courseService.selectedCourse();
  // this.selectedChapter = this.selectedCourse.chapter;
  
  //this.selectedChapter = this.selectedCourse.chapter.values();
    //this.selectedLectures = this.selectedChapter.lecture;
  }

  // addToCart(product: Course) {
  //   if(this.studentUserService.isLoggedIn()) {
  //   this.courseService.postCourseToCart(product).subscribe((res) => {
  //     console.log('Item successfully created!');
  //   }, (error) => {
  //     console.log(error);
  //   });
  //   window.alert("Your product has been added to cart!");
  //   }
  //   else{
  //     this.router.navigateByUrl('/student-signin');
  //   }
  // }
}
