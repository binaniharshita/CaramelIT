import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  showMe = false;
/*Dropdown AngularJS*/
  openFunc() {
      this.showMe = !this.showMe;
  }
}
