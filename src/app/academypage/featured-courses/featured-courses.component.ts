import { Component, OnInit } from '@angular/core';
import { SubPrograms, SUBPROGRAMS } from 'src/app/shared/subprograms';
import { ProgramCourses } from 'src/app/shared/programcourses';

@Component({
  selector: 'app-featured-courses',
  templateUrl: './featured-courses.component.html',
  styleUrls: ['./featured-courses.component.css']
})
export class FeaturedCoursesComponent implements OnInit {

  // only picking 8 courses - choosing the first 8 from Full Stack Subprogram

  subroprograms: SubPrograms[] = SUBPROGRAMS;
  courses: ProgramCourses[] = this.subroprograms[2].courses.slice(0, 8); 

  constructor() { }

  ngOnInit(): void {
  }

}
