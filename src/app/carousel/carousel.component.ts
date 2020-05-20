import { Component, OnInit } from '@angular/core';
import { Course } from './course'
import { SUBPROGRAMS } from './subprograms'
import { CourseService } from '../services/course.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})


export class CarouselComponent implements OnInit {
  

  constructor(private courseService: CourseService, private router: Router) { }

  selectedProgram: string = "";
  private callService: Function;

  ngOnInit(): void {
    this.callService = () => {
      this.courseService.selectedSubprogam(this.selectedProgram);
    };
  }

  clicked(slide: string){
    this.selectedProgram = slide;
    window.alert(this.selectedProgram);
    this.callService();
    this.router.navigateByUrl('/sub-program');
  }

  title = 'Carousel';

  slides : Course[] = SUBPROGRAMS;

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": true
  };


  // addSlide() {
  //   this.slides.push(488)
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }


}
