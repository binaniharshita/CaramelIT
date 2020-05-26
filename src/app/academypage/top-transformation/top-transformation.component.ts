import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { flyInOut } from 'src/app/animation/animation';

@Component({
  selector: 'app-top-transformation',
  templateUrl: './top-transformation.component.html',
  styleUrls: ['./top-transformation.component.css'],
  animations:[
    flyInOut()
  ]
})
export class TopTransformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
