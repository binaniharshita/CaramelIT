import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

import { CourseService } from 'src/app/services/course.service';
// import { SubPrograms, subprograms } from 'src/app/shared/subprograms';


@Component({
  selector: 'app-program-swd',
  templateUrl: './program-swd.component.html',
  styleUrls: ['./program-swd.component.css']
})
export class ProgramSwdComponent implements OnInit {

  constructor(private courseService: CourseService) { }

  //selectedsubprog: SubPrograms;

  ngOnInit(): void {
    AOS.init({
      duration: 400,
    });
  }

  selectedSubprog(subprog: string)
  {
    this.courseService.selectedSubprogam(subprog);
  }

}
