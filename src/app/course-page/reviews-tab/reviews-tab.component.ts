import { Component, OnInit } from '@angular/core';

import { Rating, RATINGS } from './rating';

@Component({
  selector: 'app-reviews-tab',
  templateUrl: './reviews-tab.component.html',
  styleUrls: ['./reviews-tab.component.css']
})
export class ReviewsTabComponent implements OnInit {

  ratings: Rating[] = RATINGS;

  constructor() { }

  ngOnInit(): void {
  }

}
