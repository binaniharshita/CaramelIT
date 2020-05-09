import { Component, OnInit } from '@angular/core';
import { RestService } from "../rest.service";
import { Colleges } from "../Colleges";

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {

  constructor(private rs : RestService) { }

  columns = ["College ID", "Name", "Email", "Phone No", "Address", "City", "Country", "Date", "No of Courses"];
  index = ["id", "name", "email", "phoneNo", "address", "city", "country", "date", "noOfCourses"];
  
  colleges : Colleges[] = [];
  ngOnInit(): void {
    this.rs.getColleges().subscribe
    (
      (response)=> 
      {
        this.colleges = response;
      },
      (error) => console.log(error)
    )
  }


}
