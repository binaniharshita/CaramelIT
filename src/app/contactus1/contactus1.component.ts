import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{RestService} from '../rest.service';

@Component({
  selector: 'app-contactus1',
  templateUrl: './contactus1.component.html',
  styleUrls: ['./contactus1.component.css']
})
export class Contactus1Component implements OnInit {
  title = 'app';
  country = ['India','U.S.A','UK','AUSTRALIA','GERMANY'];
  service = ['Mobile App','Wed Development','Digital Marketing','DevOps','Python Development'];
  budget = ['50000 - 100000','100000 - 150000','150000 - 200000','200000 - 250000','250000 - 300000','300000'];
  program =['Core UI','Backend','Full Stack','DevOps','Data Science $ AI/ML','Digital Marketing','Cloud Computing','Cyber Security','ERP','IT Certifications'];
  subprogram = ['Advanced UI','Advanced UI','Angular JS','React JS','Vue JS','Java','.Net','Node Js','Ruby','Python','Core Java','Advanced Java','MEAN','MERN','MEVN'];
  states = ['Delhi','Mumbai','Kolkata','Chennai','Tamil Naidu','Punjab','U.P','Bhiar','Gujrat','Rajasthan','Nort-East'];
  userE =['IT','NOT-IT'];
  
  submitted = false;
  errorMsg = '';
  sucess = 'Thanks for your response';
  userModel = new User('','',9999999999,'','','','','','','','');


  constructor(private _enrollmentService:RestService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userModel);
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!',error)
      )
  }

}
