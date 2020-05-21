import { Component, OnInit } from '@angular/core';
import { RestService } from "../rest.service";
import { Instructors } from "../Instructors";


@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {

  constructor(private rs : RestService) { }

  columns = ["Instructor ID", "First Name", "Last Name", "Age", "Email", "Phone No", "Address", "City", "Country", "Date", "No of Courses"];
  index = ["id", "firstName", "lastName", "age", "email", "phoneNo", "address", "city", "country", "date", "noOfCourses"];
  
  instructors : Instructors[] = [];
  ngOnInit(): void {
    this.rs.getInstructors().subscribe
    (
      (response)=> 
      {
        this.instructors = response;
      },
      (error) => console.log(error)
    )

}
}
