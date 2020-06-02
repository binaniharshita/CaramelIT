import { Component, OnInit } from '@angular/core';
import { StudentUserService } from 'src/app/shared-user/student/student-user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-test',
  templateUrl: './generate-test.component.html',
  styleUrls: ['./generate-test.component.css']
})
export class GenerateTestComponent implements OnInit {

  studentDetails;
  studentId: string;
  form: FormGroup;

  constructor(private studentService: StudentUserService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.getStudentProfile().subscribe(
      res => {
        this.studentDetails = res['student'];
        this.studentId = this.studentDetails._id;
        console.log(this.studentId);
      },
      err => {
        console.log(err);
      }
    );
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      description: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
      })
    });
  }

  onFormSend() {
    if (this.form.invalid) {
      return;
    }


    this.form.reset();

  }

}






