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
  courseDetailFormGroup: FormGroup;
  moduleDetailFormGroup: FormGroup;
  isOptional = false;
  nom : number;


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

    this.courseDetailFormGroup = this.formBuilder.group({
      title: ['', { validators: [Validators.required] }],
      description:['', { validators: [Validators.required] }],
      noOfModule: ['', { validators: [Validators.required] }],
      selectCategory: ['', { validators: [Validators.required] }],
      subcateogoryId: ['', { validators: [Validators.required] }],
    });
    this.moduleDetailFormGroup = this.formBuilder.group({
      imageUrl: ['', Validators.required]
    });
  }

  fetchSubCat(categoryId: string) {
    console.log(this.subCategories);
    this.updatedSubCategory = this.subCategories.filter(subcategory => subcategory.catId === categoryId);
    console.log(this.updatedSubCategory);

  }

  onAddCourse() {

    if (this.courseDetailFormGroup.invalid) {
      return;
    }
    // tslint:disable-next-line: max-line-length
    this.courseServices.addCourse(null, this.courseDetailFormGroup.value.title, this.courseDetailFormGroup.value.description, this.courseDetailFormGroup.value.noOfModule, this.courseDetailFormGroup.value.subcatId);
    this.courseDetailFormGroup.reset();

  }
  courseForm(){
    console.log(this.courseDetailFormGroup.value);
  }

  moduleForm(){
    console.log("hello");
    console.log(this.moduleDetailFormGroup.value);
  }

  getNoOfModule(module){
    this.nom = module.value;
    console.log(this.nom);
  }


}
