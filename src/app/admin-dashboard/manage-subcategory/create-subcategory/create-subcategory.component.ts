import { Component, OnInit } from '@angular/core';
import { SubCategory } from '../subcategory.model';
import { SubCategoryService } from '../subcaregory.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../manage-category/category.service';
import { Category } from '../../manage-category/category.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-subcategory',
  templateUrl: './create-subcategory.component.html',
  styleUrls: ['./create-subcategory.component.css']
})
export class CreateSubcategoryComponent implements OnInit {
  private mode = 'create';
  private subCatId: string;
  subCategory: SubCategory;
  categories: Category[];
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private categorySubs: Subscription;


  constructor(
    public subCategoryService: SubCategoryService,
    public route: ActivatedRoute,
    public categoriesServices: CategoryService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.form = new FormGroup({
        title: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        }),
        description: new FormControl(null, { validators: [Validators.required] }),
        catId: new FormControl(null, { validators: [Validators.required] }),
        image: new FormControl(null, {
          validators: [Validators.required],
        })
      });
      if (paramMap.has('subCatId')) {
        this.mode = 'edit';
        this.subCatId = paramMap.get('subCatId');
        this.isLoading = true;
        this.subCategoryService.getSubCategory(this.subCatId).subscribe(subCategoryData => {
          this.isLoading = false;
          this.subCategory = {
            id: subCategoryData._id,
            title: subCategoryData.title,
            description: subCategoryData.description,
            imagePath: subCategoryData.imagePath,
            catId: subCategoryData.catId,
            noOfCourses: subCategoryData.noOfCourse
          };
          this.form.setValue({
            title: this.subCategory.title,
            description: this.subCategory.description,
            image: this.subCategory.imagePath
          });
        });
      }
      else {
        this.mode = 'create';
        this.subCatId = null;
      }
    });
    this.categoriesServices.getCategories();
    this.categorySubs = this.categoriesServices.getCategoriesUpdateListener()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
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


  onAddSubCategory() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      console.log(this.form.value);
      this.subCategoryService.addSubCategory(
        this.form.value.title,
        this.form.value.description,
        this.form.value.image,
        this.form.value.catId
      );
    } else {
      this.subCategoryService.updateCategory(
        this.subCatId,
        this.form.value.title,
        this.form.value.description,
        this.form.value.image,
        this.form.value.catid,
      );
    }
    this.form.reset();
  }


}
