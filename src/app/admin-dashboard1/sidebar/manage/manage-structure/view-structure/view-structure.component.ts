import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-structure',
  templateUrl: './view-structure.component.html',
  styleUrls: ['./view-structure.component.css']
})
export class ViewStructureComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this.location.back();
  }

}
