import { Component, OnInit } from '@angular/core';
import { SubCategory } from '../subcategory.model';
import { SubCategoryService } from '../subcaregory.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
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
  private categorySubs: Subscription;


  constructor(public subCategoryService: SubCategoryService, public route: ActivatedRoute, public categoriesServices: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('subCatId')) {
        this.mode = 'edit';
        this.subCatId = paramMap.get('subCatId');
        this.subCategory = this.subCategoryService.getSubCategory(this.subCatId);
      }
      else {
        this.mode = 'create';
        this.subCatId  = null;
      }
    });
    this.categoriesServices.getCategories();
    // tslint:disable-next-line: max-line-length
    this.categorySubs = this.categoriesServices.getCategoriesUpdateListener().subscribe((categories: Category[]) => { this.categories = categories; });
  }

  onAddSubCategory(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value.catId);
    this.subCategoryService.addSubCategory(null, form.value.title, form.value.description, 0, form.value.categoryId);
    form.resetForm();

  }

}
