import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: Category[] = [];
  private categorySubs: Subscription;
  // { title: 'First category', description: 'First category' },
  // { title: 'Second category', description: 'Second category' },
  // { title: 'Third category', description: 'Third category' },]

  constructor(public categoriesServices: CategoryService) { }

  ngOnInit(): void {
    this.categoriesServices.getCategories();
    // tslint:disable-next-line: max-line-length
    this.categorySubs = this.categoriesServices.getCategoriesUpdateListener()
    .subscribe((categories: Category[]) => { this.categories = categories; });
  }
  ngOnDestory(){
    this.categorySubs.unsubscribe();
  }
  onDeleteCategory(categoryId: string){
    this.categoriesServices.deleteCategory(categoryId);

  }

}
