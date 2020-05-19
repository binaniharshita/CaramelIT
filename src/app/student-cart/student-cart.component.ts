import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../shared/course';

@Component({
  selector: 'app-student-cart',
  templateUrl: './student-cart.component.html',
  styleUrls: ['./student-cart.component.css']
})
export class StudentCartComponent implements OnInit {
  items:any = [];
  errorMessage:string
  status = true;
  total: number = 0;
  minus: number = 0;
  courses: Course[];

  constructor(private cartService: CourseService) { }

  ngOnInit(): void {
    this.getItems();
    //this.courses = this.cartService.getCourses();
    //this.total=0;
  }

  getItems() {
    this.cartService.getCartCourses().subscribe((data) => {
      this.items = data;
      //this.total = this.cartService.total;
      console.log(this.items);
    }, error => { this.errorMessage = <any> error;
    console.log(this.errorMessage);
    });
  }

  deleteFromCart(item) {
    //this.total = this.total - Number(COURSES.find(course => course.course_id == item.course_id).price);
    this.cartService.deleteCourseFromCart(item.course_id).subscribe(
      (res) => {
        console.log("Item Deleted");
        this.getItems();
      }, (error) => {
        console.log(error);
      }
    );
    window.alert("Your item has been deleted!");
  }

}
