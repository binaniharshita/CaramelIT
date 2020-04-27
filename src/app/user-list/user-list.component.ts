import { Component, OnInit } from '@angular/core';

export interface userData {
  ID: number;
  firstName: string;
  lastName: string;
  mobileNumber: number;
  emailAddress: string;
  dateOfBirth: string;
  state: string;
  highestQualification: string;
  collegeName: string;
  universityName: string;
  specialisation: string;
  studentRoll: string;
  skillset: string;
  collegeState: string;
}

const userDataDisplay: userData[] = [
  { ID: 1,							
    firstName: 'Vekatasiva',
    lastName: 'Sampangi',
    mobileNumber: 9703606934,
    emailAddress: 'venkatsanju70@gmail.com',
    dateOfBirth: '1997-02-16',
    state: 'Andhra',
    highestQualification: 'B.Tech',
    collegeName: 'RGMCET',
    universityName: 'JNTU',
    specialisation: 'MECH',
    studentRoll: '15091A03K9',
    skillset: '',
    collegeState: 'ANDHRAPRADESH'
  }
];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'ID', 'firstName', 'lastName', 'mobileNumber', 'emailAddress', 'dateOfBirth', 'state', 'highestQualification', 'collegeName', 'universityName', 'specialisation', 'studentRoll', 'skillset', 'collegeState'];
  dataSource = userDataDisplay;

}
