import { Component, OnInit } from '@angular/core';
import { SubPrograms, SUBPROGRAMS } from 'src/app/shared/subprograms';
import { ProgramCourses } from 'src/app/shared/programcourses';


@Component({
  selector: 'app-courses-options',
  templateUrl: './courses-options.component.html',
  styleUrls: ['./courses-options.component.css']
})
export class CoursesOptionsComponent implements OnInit {

  categories: SubPrograms[] = SUBPROGRAMS;
  selectedCategory: string = this.categories[0].title;
  courses: ProgramCourses[] = this.categories[0].courses; //default is the ones for the first category 

  constructor() { }

  ngOnInit(): void {
  }

  categorySelected(categoryTitle :string) {
    this.selectedCategory = categoryTitle;
    
    for(let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].title == this.selectedCategory) {
        this.courses = this.categories[i].courses;
        break;
      }
    }
  }
}
