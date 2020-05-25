import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../category.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  private mode = 'create';
  private categoryId: string;
  category: Category;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;


  constructor(
    public categoryService: CategoryService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      description: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
      })
    });


    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('categoryId')) {
        this.mode = 'edit';
        this.categoryId = paramMap.get('categoryId');
        this.isLoading = true;
        this.categoryService.getCategory(this.categoryId).subscribe(categoryData => {
          this.isLoading = false;
          this.category = {
            id: categoryData._id,
            title: categoryData.title,
            description: categoryData.description,
            imagePath: categoryData.imagePath,
            noOfSubCategories: categoryData.noOfSubCategories,
            noOfCourses: categoryData.noOfCourse
          };
          this.form.setValue({
            title: this.category.title,
            description: this.category.description,
            image: this.category.imagePath
          });
        });
      }
      else {
        this.mode = 'create';
        this.categoryId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const imageFile = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: imageFile });
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(imageFile);
  }


  onAddCategory() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.categoryService.addCategory(
        this.form.value.title,
        this.form.value.description,
        this.form.value.image
      );
    } else {
      this.categoryService.updateCategory(
        this.categoryId,
        this.form.value.title,
        this.form.value.description,
        this.form.value.image,
      );
    }
    this.form.reset();
  }

}
