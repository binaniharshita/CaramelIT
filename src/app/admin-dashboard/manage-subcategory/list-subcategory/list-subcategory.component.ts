import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from '../subcaregory.service';
import { SubCategory } from '../subcategory.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.scss']
})
export class ListSubcategoryComponent implements OnInit {
  subCategories: SubCategory[] = [];
  private subCategorySubs: Subscription;

  constructor(public subCategoriesServices: SubCategoryService) { }

  ngOnInit(): void {
    this.subCategoriesServices.getSubCategories();
    // tslint:disable-next-line: max-line-length
    this.subCategorySubs = this.subCategoriesServices.getSubCategoriesUpdateListener().subscribe((subCategories: SubCategory[]) => {
      this.subCategories = subCategories;
    });
  }
  onDeleteSubCategory(subCategoryId: string) {
    console.log('Inside list sub component');
    this.subCategoriesServices.deleteSubCategory(subCategoryId);

  }

}
