import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howwework',
  templateUrl: './howwework.component.html',
  styleUrls: ['./howwework.component.css']
})
export class HowweworkComponent implements OnInit {
  slidetext = 'Show More';

  constructor() { }

  ngOnInit(): void {
  }
  onSlideChange(){
      if(this.slidetext === 'Show More'){
        this.slidetext = 'Show less';
      }
      else{
        this.slidetext = 'Show More'
      }
    }

}
