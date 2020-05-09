import { Component, OnInit } from '@angular/core';
import { RestService } from "../rest.service";
import { Questions } from "../Questions";

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent implements OnInit {

  constructor(private rs : RestService) { }

  columns = ["Question Id", "Question Number", "Display-type", "level", "Flagged", "Category"];
  index = ["id", "number", "type", "level", "Status", "Category"];

  questions : Questions[] = [];
  ngOnInit(): void {
    this.rs.getQuestions().subscribe
    (
      (response)=>
      {
        this.questions = response;
      },
      (error) => console.log(error)
    )
  }

}