import { Component, OnInit } from '@angular/core';
import { RestService } from "../rest.service";
import { Students } from "../Students";



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private rs : RestService) { }

  columns = ["Student ID", "First Name", "Last Name", "Age", "Email", "Phone No", "Address", "City", "Country", "Date", "No of Courses"];
  index = ["id", "firstName", "lastName", "age", "email", "phoneNo", "address", "city", "country", "date", "noOfCourses"];
  
  students : Students[] = [];
  ngOnInit(): void {
    this.rs.getStudents().subscribe
    (
      (response)=> 
      {
        this.students = response;
      },
      (error) => console.log(error)
    )
  }

}
