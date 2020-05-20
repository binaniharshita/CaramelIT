import { Component, OnInit } from '@angular/core';

import { CourseService } from 'src/app/services/course.service';
import { SUBPROGRAM, SubPrograms } from 'src/app/shared/subprograms';
import { PROGRAMCOURSES, ProgramCourses } from 'src/app/shared/programcourses';

@Component({
  selector: 'app-sub-program',
  templateUrl: './sub-program.component.html',
  styleUrls: ['./sub-program.component.css']
})
export class SubProgramComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  selectedSubprogram: string;
  allSubPrograms: SubPrograms[] = SUBPROGRAM;
  allProgramCourses: ProgramCourses[] = PROGRAMCOURSES;
  description: string;
  image: string;
  coursesNames: string[];
  courses: ProgramCourses[];

  ngOnInit() {
    this.selectedSubprogram = this.courseService.getSubprogam();

    for (let i = 0; i < this.allSubPrograms.length; i++) {
      if (this.selectedSubprogram == this.allSubPrograms[i].title) {
        this.description = this.allSubPrograms[i].description;
        this.image = this.allSubPrograms[i].image;
        this.coursesNames = this.allSubPrograms[i].courses;
        break;
      }
    }

    // window.alert(this.coursesNames[0]+ "heyooooo");
    // window.alert(this.allProgramCourses[0].name+ "f");

    for (let k = 0; k < this.coursesNames.length; k++) {
      for (let j = 0; j < this.allProgramCourses.length; j++) {
        if(this.allProgramCourses[j].name == this.coursesNames[k]){
          this.courses[k].name = this.coursesNames[k];
          this.courses[k].image = this.allProgramCourses[j].image;
          window.alert(this.coursesNames[0]);
          break;
        }
      }
    }

  }

}
