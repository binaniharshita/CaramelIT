import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from '../../shared/course';
import { CourseService } from '../../services/course.service';
import { CategoryService } from '../../admin-dashboard/manage-category/category.service';
import { Category } from '../../admin-dashboard/manage-category/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ourprogram',
  templateUrl: './ourprogram.component.html',
  styleUrls: ['./ourprogram.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OurprogramComponent implements OnInit {

  divShow = false;
  courses: Course[];
  categories: Category[];
  private categorySubs: Subscription;
  constructor(private courseService: CourseService, private categoriesService: CategoryService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.categoriesService.getCategories();
    this.categorySubs = this.categoriesService.getCategoriesUpdateListener()
    .subscribe((categories: Category[]) => { this.categories = categories; });
  }
  onSelect(course: Course) {
    this.courseService.displayCourse(course);
  }

  onSoftwareDevelopmentClick() {
    this.divShow = !this.divShow;
  }

}
