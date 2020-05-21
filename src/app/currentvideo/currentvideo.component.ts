import { Component, OnInit, Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Lecture } from '../shared/lecture';

@Component({
  selector: 'app-currentvideo',
  templateUrl: './currentvideo.component.html',
  styleUrls: ['./currentvideo.component.css']
})
export class CurrentvideoComponent implements OnInit {

  @Input()
  lecture: Lecture;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getPptUrl(lecture){
    return this.sanitizer.bypassSecurityTrustResourceUrl(lecture.pptlink);
  }


}
