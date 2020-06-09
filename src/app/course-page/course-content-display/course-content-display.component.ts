import { Component, OnInit, Input } from '@angular/core';
import { Course, Lesson } from '../../admin-dashboard/manage-course/course.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-course-content-display',
  templateUrl: './course-content-display.component.html',
  styleUrls: ['./course-content-display.component.css']
})
export class CourseContentDisplayComponent implements OnInit {
  courseName;
  //public courseDiscription;

  @Input()
  course: Course;

  contentLength: number;
  lectures : Lesson[];
  // courseName: string;
  // lectures: string[] = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"
  // , "Topic 6", "Topic 7",
  // "Topic 8", "Topic 9","Topic 10", "Topic 11",
  // "Topic 12", "Topic 13","Topic 14","Topic 15","Topic 16", "Topic 17", "Topic 18","Topic 19"];

  currentSlide = 'https://onedrive.live.com/embed?cid=1488ABC83D8F1B5E&resid=1488ABC83D8F1B5E%21122&authkey=AOLA8ubRNnNSyFI&em=2';
  // currentSlide = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.courseName = this.course.title;
    // this.courseDiscription = this.course.contentModule[1];
    this.lectures = this.course.contentModule.lesson;


    // this.contentLength = this.lectures;


  }
  onLectureClick(lecture){
    this.currentSlide = lecture.pptLink;
    console.log(this.currentSlide);
  }

  getPptUrl(slides){
    return this.sanitizer.bypassSecurityTrustResourceUrl(slides);
  }

}
