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
import { DomSanitizer } from '@angular/platform-browser';
import { mimeType } from './mime-type.validator';


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
  fileLessonPreview: string;
  fileScenarioPreview: string;
  fileTestPreview: string;
  fileProjectPreview: string;
  isLoading = false;



  // tslint:disable-next-line: max-line-length
  constructor(public sanitizer: DomSanitizer, private formBuilder: FormBuilder, public courseServices: CourseService, public subCatService: SubCategoryService, public route: ActivatedRoute, public categoriesServices: CategoryService) { }

  ngOnInit(): void {

    // FIRST STEPPER VALIDATOR
    this.courseDetailFormGroup = this.formBuilder.group({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      description: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      skillCovered: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      selectCategory: ['', { validators: [Validators.required] }],
      subcateogoryId: ['', { validators: [Validators.required] }],
    });

    // SECOND STEPPER VALIDATOR
    this.moduleDetailFormGroup = this.formBuilder.group({
      image: new FormControl(null, {
        validators: [Validators.required],
      }),
      lessonFile: ['', Validators.required],
      scenarioFile: ['', Validators.required],
      testFile: ['', Validators.required],
      projectFile: ['', Validators.required]

    });

    // SELECT MODE : CREATE OR EDIT
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('courseId')) {
        this.mode = 'edit';
        this.courseId = paramMap.get('courseId');
        this.isLoading = true;
        this.courseServices.getCourse(this.courseId).subscribe(courseData => {
          this.isLoading = false;
          // this.course = {
          //   id: courseData._id,
          //   title: courseData.title,
          //   subCatId: courseData.subCatId,
          //   description: courseData.description,
          //   imagePath: courseData.imagePath,
          //   contentModule: courseData.module
          // };
          this.courseDetailFormGroup.setValue({
            title: this.course.title,
            content: this.course.description,
            image: this.course.imagePath
          });
        });
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



  }

  fetchSubCat(categoryId: string) {
    console.log(this.subCategories);
    this.updatedSubCategory = this.subCategories.filter(subcategory => subcategory.catId === categoryId);
    console.log(this.updatedSubCategory);
  }
  onFileLessonPicked(event: Event) {
    const docLessonFile = (event.target as HTMLInputElement).files[0];
    this.moduleDetailFormGroup.patchValue({ lessonFile: docLessonFile });
    this.moduleDetailFormGroup.get('lessonFile').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.fileLessonPreview = reader.result as string;
    };
    reader.readAsDataURL(docLessonFile);
  }
  onFileScenarioPicked(event: Event) {
    const docScenarioFile = (event.target as HTMLInputElement).files[0];
    this.moduleDetailFormGroup.patchValue({ scenarioFile: docScenarioFile });
    this.moduleDetailFormGroup.get('scenarioFile').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.fileScenarioPreview = reader.result as string;
    };
    reader.readAsDataURL(docScenarioFile);
  }
  onFileTestPicked(event: Event) {
    const docTestFile = (event.target as HTMLInputElement).files[0];
    this.moduleDetailFormGroup.patchValue({ testFile: docTestFile });
    this.moduleDetailFormGroup.get('testFile').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.fileTestPreview = reader.result as string;
    };
    reader.readAsDataURL(docTestFile);
  }
  onFileProjectPicked(event: Event) {
    const docProjectFile = (event.target as HTMLInputElement).files[0];
    this.moduleDetailFormGroup.patchValue({ projectFile: docProjectFile });
    this.moduleDetailFormGroup.get('projectFile').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.fileProjectPreview = reader.result as string;
    };
    reader.readAsDataURL(docProjectFile);
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

  // CALLING ADDCOURSE SERVICE FUNCTION
  onAddCourse() {
    // if (this.courseDetailFormGroup.invalid || this.moduleDetailFormGroup.invalid) {
    //   return;
    // }

    this.isLoading = true;
    if (this.mode === 'create') {
      console.log('Hello');
      this.courseServices.addCourse(
        this.courseDetailFormGroup.value.title,
        this.courseDetailFormGroup.value.description,
        this.courseDetailFormGroup.value.subcateogoryId,
        this.moduleDetailFormGroup.value.image
      );
    }
    else {
      // this.courseServices.updateCourse(
      //   this.courseId,
      //   this.courseDetailFormGroup.value.title,
      //   this.courseDetailFormGroup.value.description,
      //   this.courseDetailFormGroup.value.subcateogoryId,
      //   this.moduleDetailFormGroup.value.image

      // )

    }
    this.courseDetailFormGroup.reset();
    this.moduleDetailFormGroup.reset();

  }

  addLesson() {
    this.isLoading = true;
    this.courseServices.addLessonFile(this.moduleDetailFormGroup.value.lessonFile);
  }

  addScenario() {
    this.isLoading = true;
    this.courseServices.addScenarioFile(this.moduleDetailFormGroup.value.scenarioFile);
  }
  addProject() {
    this.isLoading = true;
    this.courseServices.addProjectFile(this.moduleDetailFormGroup.value.projectFile);
  }
  addTest() {
    this.isLoading = true;
    this.courseServices.addTestFile(this.moduleDetailFormGroup.value.testFile);
  }

  onAddModule() {
    this.isLoading = true;
    this.courseServices.addModule();
  }

}
