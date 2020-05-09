import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magane-cat-subcat',
  templateUrl: './magane-cat-subcat.component.html',
  styleUrls: ['./magane-cat-subcat.component.css']
})
export class MaganeCatSubcatComponent implements OnInit {
  navLinks = [{
    title: 'Category', path: 'create-category'
  },
  {
    title: 'SubCategory', path: 'create-category'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
