import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../manage-category/category.service';
import { SubCategoryService } from '../../manage-subcategory/subcaregory.service';
import { Subscription } from 'rxjs';
import { SubCategory } from '../../manage-subcategory/subcategory.model';
import { Category } from '../../manage-category/category.model';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  private mode = 'create';
  private courseId: string;
  course: Course;
  private subCategorySubs: Subscription;
  subCategories: SubCategory[];
  categories: Category[];
  private categorySubs: Subscription;
  updatedSubCategory: SubCategory[];


  // tslint:disable-next-line: max-line-length
  constructor(public courseServices: CourseService, public subCatService: SubCategoryService, public route: ActivatedRoute, public categoriesServices: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('courseId')) {
        this.mode = 'edit';
        this.courseId = paramMap.get('courseId');
        this.course = this.courseServices.getCourse(this.courseId);
      }
      else {
        this.mode = 'create';
        this.courseId = null;
      }
    });

    this.subCatService.getSubCategories();
    // tslint:disable-next-line: max-line-length
    this.subCategorySubs = this.subCatService.getSubCategoriesUpdateListener()
    .subscribe((subCategories: SubCategory[]) => {
      this.subCategories = subCategories;
    });
    this.categoriesServices.getCategories();
    // tslint:disable-next-line: max-line-length
    this.categorySubs = this.categoriesServices.getCategoriesUpdateListener().subscribe((categories: Category[]) => { this.categories = categories; });
  }

  fetchSubCat(categoryId: string){
    console.log(this.subCategories);
    this.updatedSubCategory = this.subCategories.filter(subcategory => subcategory.catId === categoryId);
    console.log(this.updatedSubCategory);

  }

  onAddCourse(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.courseServices.addCourse(null, form.value.title, form.value.description, form.value.noOfModule, form.value.subcatId);
    form.resetForm();

  }


}
