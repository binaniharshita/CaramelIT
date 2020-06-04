import { Component, OnInit } from '@angular/core';

import { Modules, MODULES } from './modules';

@Component({
  selector: 'app-user-table-of-contents-tab',
  templateUrl: './user-table-of-contents-tab.component.html',
  styleUrls: ['./user-table-of-contents-tab.component.css']
})
export class UserTableOfContentsTabComponent implements OnInit {

  modules: Modules[] = MODULES;
  instructorName: string = "John Doe";
  instructorImage: string = "../../assets/images/CoursePage/instructor.jpg";
  instructorInfo: string = "'John Doe' and 'Jane Doe' are multiple-use names that are used when the true name of a person is unknown or is being intentionally concealed. In the context of law enforcement in the United States, such names are often used to refer to a corpse whose identity is unknown or unconfirmed.";
  
  constructor() { }

  ngOnInit(): void {
  }

}
