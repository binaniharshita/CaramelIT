import { Component, OnInit } from '@angular/core';
import { RestService } from "../rest.service";
import { Recommendations } from "../Recommendations";

@Component({
  selector: 'app-recommendation-system',
  templateUrl: './recommendation-system.component.html',
  styleUrls: ['./recommendation-system.component.css']
})
export class RecommendationSystemComponent implements OnInit {

  constructor(private rs : RestService) { }

  columns = ["College ID", "Name", "Email", "Phone No", "Address", "City", "Country", "Date", "No of Courses"];
  index = ["id", "name", "email", "phoneNo", "address", "city", "country", "date", "noOfCourses"];
  
  recommendations : Recommendations[] = [];
  ngOnInit(): void {
    this.rs.getRecommendations().subscribe
    (
      (response)=> 
      {
        this.recommendations = response;
      },
      (error) => console.log(error)
    )
  }

}

