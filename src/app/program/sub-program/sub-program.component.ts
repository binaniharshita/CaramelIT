import { Component, OnInit } from '@angular/core';

import { CourseService } from 'src/app/services/course.service';
import { subprograms, SubPrograms } from 'src/app/shared/subprograms';
import { programcourses, ProgramCourses } from 'src/app/shared/programcourses';

@Component({
  selector: 'app-sub-program',
  templateUrl: './sub-program.component.html',
  styleUrls: ['./sub-program.component.css']
})
export class SubProgramComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  selectedSubprogram: string;

  subprogram: SubPrograms;

  progcourses: ProgramCourses;

  ngOnInit() {
    this.selectedSubprogram = this.courseService.getSubprogam();
    //window.alert(this.selectedSubprogram);
    for(let i=0;i<subprograms.length;i++){
      if(subprograms[i].title==this.selectedSubprogram){
        this.subprogram = subprograms[i];
      }
    }
    for(let i=0;i<programcourses.length;i++)
    {
      if(programcourses[i].name==this.subprogram.title) {
        this.progcourses = programcourses[i];
      }
    }
  }

}
