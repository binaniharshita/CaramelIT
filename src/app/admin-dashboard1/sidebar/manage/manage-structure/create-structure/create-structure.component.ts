import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-structure',
  templateUrl: './create-structure.component.html',
  styleUrls: ['./create-structure.component.css']
})
export class CreateStructureComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this.location.back();
  }

}
