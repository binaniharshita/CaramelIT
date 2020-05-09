import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  isLinear = true;
  firstForm: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;


  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, public courseServices: CourseService, public subCatService: SubCategoryService, public route: ActivatedRoute, public categoriesServices: CategoryService) { }

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
    console.log(this.categories);

    this.firstForm = this.formBuilder.group({
      title: [null, { validators: [Validators.required] }],
      description:[null, { validators: [Validators.required] }],
      noOfModule: [null, { validators: [Validators.required] }],
      selectCategory: [null, { validators: [Validators.required] }],
      subcatId: [null, { validators: [Validators.required] }],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  fetchSubCat(categoryId: string) {
    console.log(this.subCategories);
    this.updatedSubCategory = this.subCategories.filter(subcategory => subcategory.catId === categoryId);
    console.log(this.updatedSubCategory);

  }

  onAddCourse() {

    if (this.firstForm.invalid) {
      return;
    }
    // tslint:disable-next-line: max-line-length
    this.courseServices.addCourse(null, this.firstForm.value.title, this.firstForm.value.description, this.firstForm.value.noOfModule, this.firstForm.value.subcatId);
    this.firstForm.reset();

  }


}
