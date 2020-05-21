import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/course';
import { SUBPROGRAMS, SubPrograms } from 'src/app/shared/subprograms';
import { ProgramCourses } from 'src/app/shared/programcourses';

@Component({
  selector: 'app-other-courses',
  templateUrl: './other-courses.component.html',
  styleUrls: ['./other-courses.component.css']
})
export class OtherCoursesComponent implements OnInit {

  @Input()
  course: Course;

  courseName: string;
  relatedCourses: ProgramCourses[];   // should be changed to course later on - all program courses needs to be updated!!!
  allSubPrograms: SubPrograms[] = SUBPROGRAMS;
  index: number;
  downloadImage:string = '/assets/images/download.png';

  // related courses are other courses within the subprogram the current course is a part of 

  constructor() {
  }

  ngOnInit(): void {
    this.courseName = this.course.name;

    for (let i = 0; i < this.allSubPrograms.length; i++) {
      let found = 0;
      for (let j = 0; j < this.allSubPrograms[i].courses.length; j++) {
        if (this.allSubPrograms[i].courses[j].name == this.courseName) {
          this.relatedCourses = this.allSubPrograms[i].courses;
          this.index= j;
          // window.alert(this.allSubPrograms[i].courses[0].name);
          found = 1;
          break;
        }
      }
      if (found) break;
    }

    // in order to remove the course itself from the related courses list
    if (this.index !== -1) {
        this.relatedCourses.splice(this.index, 1);
    }      
  }

  clicked(){
    // this.selectedProgram = slide;
    // this.callService();
    // this.router.navigateByUrl('/sub-program');
  }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };


}
