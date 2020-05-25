import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatwework',
  templateUrl: './whatwework.component.html',
  styleUrls: ['./whatwework.component.css']
})
export class WhatweworkComponent implements OnInit {

  slidetext = 'Show More';
  icon = 'keyboard_arrow_down';


  constructor() { }

  ngOnInit(): void {
  }

  onSlideChange() {
    if (this.slidetext === 'Show More') {
      this.slidetext = 'Show less';
      this.icon = 'keyboard_arrow_up';
    }
    else {
      this.slidetext = 'Show More';
      this.icon = 'keyboard_arrow_down';
    }
  }
}
