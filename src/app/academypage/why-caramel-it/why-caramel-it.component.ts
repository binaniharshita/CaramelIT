import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { openClose } from 'src/app/animation/animation';



@Component({
  selector: 'app-why-caramel-it',
  templateUrl: './why-caramel-it.component.html',
  styleUrls: ['./why-caramel-it.component.css'],
  animations: [
    openClose()
  ],
})
export class WhyCaramelItComponent implements OnInit {
  slidetext = 'Show More';
  icon ='keyboard_arrow_down';
  isOpen = true;


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
