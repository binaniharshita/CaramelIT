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
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:3000/api/upload';

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
  nom: number;
  imagePreview: string;
  filePreview: string;
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;


  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, public courseServices: CourseService, public subCatService: SubCategoryService, public route: ActivatedRoute, public categoriesServices: CategoryService) {
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });
    console.log('hello');

    this.hasBaseDropZoneOver = false;
    this.hasAnotherDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe(res => this.response = res);
  }

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
      description: ['', { validators: [Validators.required] }],
      noOfModule: ['', { validators: [Validators.required] }],
      selectCategory: ['', { validators: [Validators.required] }],
      subcateogoryId: ['', { validators: [Validators.required] }],
    });
    this.moduleDetailFormGroup = this.formBuilder.group({
      image: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  fetchSubCat(categoryId: string) {
    console.log(this.subCategories);
    this.updatedSubCategory = this.subCategories.filter(subcategory => subcategory.catId === categoryId);
    console.log(this.updatedSubCategory);
  }
  onFilePicked(event: Event) {
    const docFile = (event.target as HTMLInputElement).files[0];
    this.moduleDetailFormGroup.patchValue({ file: docFile });
    this.moduleDetailFormGroup.get('file').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.filePreview = reader.result as string;
    };
    reader.readAsDataURL(docFile);
  }
  onImagePicked(event: Event) {
    const imageFile = (event.target as HTMLInputElement).files[0];
    this.moduleDetailFormGroup.patchValue({ image: imageFile });
    this.moduleDetailFormGroup.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(imageFile);
  }

  onAddCourse() {

    if (this.courseDetailFormGroup.invalid) {
      return;
    }
    // tslint:disable-next-line: max-line-length
    this.courseServices.addCourse(null, this.courseDetailFormGroup.value.title, this.courseDetailFormGroup.value.description, this.courseDetailFormGroup.value.noOfModule, this.courseDetailFormGroup.value.subcatId);
    this.courseDetailFormGroup.reset();

  }
  courseForm() {
    console.log(this.courseDetailFormGroup.value);
  }

  moduleForm() {
    console.log(this.moduleDetailFormGroup.value);
  }

  getNoOfModule(module) {
    this.nom = module.value;
    console.log(this.nom);
  }


}
