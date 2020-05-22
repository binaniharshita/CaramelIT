import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { Course } from '../../shared/course';
// import { CourseService } from '../../services/course.service';
import { CategoryService } from '../../admin-dashboard/manage-category/category.service';
import { Category } from '../../admin-dashboard/manage-category/category.model';
import { Subscription } from 'rxjs';
import { Course } from '../../admin-dashboard/manage-course/course.model';
import { CourseService } from '../../admin-dashboard/manage-course/course.service';
import { SubCategoryService } from '../../admin-dashboard/manage-subcategory/subcaregory.service';
import { SubCategory } from '../../admin-dashboard/manage-subcategory/subcategory.model';

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
  private courseId: string;
  course: Course;
  private subCategorySubs: Subscription;
  subCategories: SubCategory[];
  updatedSubCategory: SubCategory[];

  // tslint:disable-next-line: max-line-length
  constructor(private courseService: CourseService,
              private subCatService: SubCategoryService,
              private categoriesServices: CategoryService) { }

  ngOnInit(): void {
    this.subCatService.getSubCategories();
    // tslint:disable-next-line: max-line-length

    this.subCategorySubs = this.subCatService.getSubCategoriesUpdateListener()
      .subscribe((subCategories: SubCategory[]) => {
        this.subCategories = subCategories;
      });

    this.categoriesServices.getCategories();

    // tslint:disable-next-line: max-line-length
    this.categorySubs = this.categoriesServices.getCategoriesUpdateListener().subscribe((categories: Category[]) => { this.categories = categories; });
    console.log(this.categories);

  }
  fetchSubCat(categoryId: string) {
    console.log(this.subCategories);
    this.updatedSubCategory = this.subCategories.filter(subcategory => subcategory.catId === categoryId);
    console.log(this.updatedSubCategory);
  }
  onSelect(course: Course) {

  }

  onSoftwareDevelopmentClick() {
    this.divShow = !this.divShow;
  }

}
