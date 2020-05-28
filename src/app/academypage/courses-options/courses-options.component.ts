import { Component, OnInit } from '@angular/core';
// import { SubPrograms, SUBPROGRAMS } from 'src/app/shared/subprograms';
// import { ProgramCourses } from 'src/app/shared/programcourses';

// CODE BY NAVIN

import { CategoryService } from 'src/app/admin-dashboard/manage-category/category.service';
import { Category } from 'src/app/admin-dashboard/manage-category/category.model';
import { Subscription } from 'rxjs';

import { SubCategoryService } from 'src/app/admin-dashboard/manage-subcategory/subcaregory.service';
import { SubCategory } from 'src/app/admin-dashboard/manage-subcategory/subcategory.model';

import { CourseService } from 'src/app/admin-dashboard/manage-course/course.service';
import { Course } from 'src/app/admin-dashboard/manage-course/course.model';

@Component({
  selector: 'app-courses-options',
  templateUrl: './courses-options.component.html',
  styleUrls: ['./courses-options.component.css']
})
export class CoursesOptionsComponent implements OnInit {
  categories: Category[];
  categorySubs: Subscription;

  subcategories: SubCategory[];
  subcategorySubs: Subscription;
  getSubCategory: SubCategory[];

  courses : Course[];
  coureseSubs: Subscription;
  getCourse: Course[];

  isLoading = false;

  // ARYA's CODE
  // categories: SubPrograms[] = SUBPROGRAMS;
  // selectedCategory: string = this.categories[0].title;
  // courses: ProgramCourses[] = this.categories[0].courses; //default is the ones for the first category

  constructor(private categoryServices: CategoryService,
              private subcategoryService: SubCategoryService,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.categoryServices.getCategories();
    // tslint:disable-next-line: max-line-length
    this.categorySubs = this.categoryServices.getCategoriesUpdateListener()
      .subscribe((categories: Category[]) => { this.categories = categories; });
    console.log(this.categories);


    this.subcategoryService.getSubCategories();

    this.subcategorySubs = this.subcategoryService.getSubCategoriesUpdateListener()
      .subscribe((subcategory: SubCategory[]) => { this.subcategories = subcategory; });

    this.courseService.getCourses();

    this.coureseSubs = this.courseService.getCoursesUpdateListener()
      .subscribe((course: Course[]) => { this.courses = course; });

  }
  fetchsubcategory(id: string) {
    this.isLoading = true;
    this.getSubCategory = this.subcategories.filter(subcategory => subcategory.catId === id);
    console.log(this.getSubCategory);
    this.isLoading = false;

  }

  fetchcourse(id: string) {

    for(let i = 0; i < this.courses.length; i++){
      console.log(this.courses[i].subCatId);
    }
    console.log(id);
    this.isLoading = true;
    this.getCourse = this.courses.filter(course => course.subCatId === id);
    console.log(this.getCourse);
    this.isLoading = false;

  }


  // CODE BY ARYA's
  // categorySelected(categoryTitle :string) {
  //   this.selectedCategory = categoryTitle;

  //   for(let i = 0; i < this.categories.length; i++) {
  //     if (this.categories[i].title == this.selectedCategory) {
  //       this.courses = this.categories[i].courses;
  //       break;
  //     }
  //   }
  // }
}
