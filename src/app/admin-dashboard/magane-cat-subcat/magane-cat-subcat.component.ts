import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magane-cat-subcat',
  templateUrl: './magane-cat-subcat.component.html',
  styleUrls: ['./magane-cat-subcat.component.css']
})
export class MaganeCatSubcatComponent implements OnInit {
  navLinks = [{
    title: 'Manage Group', path: 'create-category'
  },
  {
    title: 'Manage SubGroup', path: 'create-category'
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
