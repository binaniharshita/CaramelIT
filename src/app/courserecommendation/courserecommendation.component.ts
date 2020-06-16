import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ProgramCourses, PROGRAMCOURSES } from '../shared/programcourses';

import * as XLSX from 'xlsx';


@Component({
  selector: 'app-courserecommendation',
  templateUrl: './courserecommendation.component.html',
  styleUrls: ['./courserecommendation.component.css']
})
export class CourserecommendationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  searchword = new FormControl;
  options;
  file: File;
  filteredOptions;
  arrayBuffer: any;
  csvUrl = 'assets/Caramel IT Course Codes.csv';
  courses = PROGRAMCOURSES;
  result;
  showResult = false;
  display = [];

  ngOnInit() {
    this.filteredOptions = this.searchword.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.http.get(this.csvUrl, {responseType: 'text'}).subscribe(data => {
      console.log(data)
    });

    for(let i = 0; i< 6; i++) {
      let random = this.courses[Math.floor(Math.random() * this.courses.length)];
      this.display.push(random);
    }
  }
  
  _filter(value) {
    const filterValue = value.toLowerCase();

    return this.courses.filter(course => course.name.toLowerCase().includes(filterValue));
  }

  searchCourse() {
    console.log(this.searchword.value);
    this.result = this.searchword.value;
    this.showResult = true;
    //this.result = this._filter(this.searchword.value);
    /*let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
        }
        fileReader.readAsArrayBuffer(this.file);*/
  }

}
