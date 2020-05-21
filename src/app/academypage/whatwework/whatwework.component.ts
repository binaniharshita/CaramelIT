import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatwework',
  templateUrl: './whatwework.component.html',
  styleUrls: ['./whatwework.component.css']
})
export class WhatweworkComponent implements OnInit {

  slidetext = 'Show More';


  constructor() { }

  ngOnInit(): void {
  }

  onSlideChange(){
    if(this.slidetext === 'Show More'){
      this.slidetext = 'Show less';
    }
    else{
      this.slidetext = 'Show More';
    }
  }

}
