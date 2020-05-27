import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Students } from "./Students"; 
import { Instructors } from "./Instructors";
import { Colleges } from "./Colleges";
import { Corporates } from "./Corporates";
import { Questions } from "./Questions";
import { Recommendations } from "./Recommendations";
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url1 : string = "http://localhost:3000/Students/";
  

  getStudents()
{
    return this.http.get<Students[]>(this.url1);
}
url0: string =  "http://localhost:3000/Instructors/";
getInstructors()
{
    return this.http.get<Instructors[]>(this.url0);
}

ur11: string =  "http://localhost:3000/Colleges/";
getColleges()
{
    return this.http.get<Colleges[]>(this.ur11);
}

ur12: string =  "http://localhost:3000/Corporates/";
getCorporates()
{
    return this.http.get<Corporates[]>(this.ur12);
}

ur13: string =  "http://localhost:3000/Questions/";
getQuestions()
{
    return this.http.get<Questions[]>(this.ur13);
}

ur2: string =  "http://localhost:3000/Recommendations/";
getRecommendations()
{
    return this.http.get<Recommendations[]>(this.ur2);
}

_url = 'http://localhost:6688/add';


enroll (user: User) {
  return this.http.post<any>(this._url, user)
    
}

}
