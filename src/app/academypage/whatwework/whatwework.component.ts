import { Component, OnInit } from '@angular/core';
import { openClose } from 'src/app/animation/animation';


@Component({
  selector: 'app-whatwework',
  templateUrl: './whatwework.component.html',
  styleUrls: ['./whatwework.component.css'],
  animations: [
    openClose()
  ],

})
export class WhatweworkComponent implements OnInit {
  slidetext = 'Show More';
  icon ='keyboard_arrow_down';
  isOpen = false;


  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if(this.slidetext === 'Show More'){
      this.slidetext = 'Show less';
      this.icon = 'keyboard_arrow_up';
    }
    else{
      this.slidetext = 'Show More';
      this.icon = 'keyboard_arrow_down';
    }
  }
}
