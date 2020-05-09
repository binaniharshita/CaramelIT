import { Component, OnInit } from '@angular/core';
import { RestService } from "../rest.service";
import { Corporates } from "../Corporates";


@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.css']
})
export class OrganisationListComponent implements OnInit {
  constructor(private rs : RestService) { }

  columns = ["Corporate ID", "Name", "Email", "Phone No", "Address", "City", "Country", "Date", "No of Courses"];
  index = ["id", "name", "email", "phoneNo", "address", "city", "country", "date", "noOfCourses"];
  
  corporates : Corporates[] = [];
  ngOnInit(): void {
    this.rs.getCorporates().subscribe
    (
      (response)=> 
      {
        this.corporates = response;
      },
      (error) => console.log(error)
    )
  }

}
