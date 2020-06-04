import { Component, OnInit } from '@angular/core';

import { Rating, RATINGS } from './rating';

@Component({
  selector: 'app-user-reviews-tab',
  templateUrl: './user-reviews-tab.component.html',
  styleUrls: ['./user-reviews-tab.component.css']
})
export class UserReviewsTabComponent implements OnInit {

  ratings: Rating[] = RATINGS;

  constructor() { }

  ngOnInit(): void {
  }

}
