import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Category } from '../category.model';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../category.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  private mode = 'create';
  private categoryId: string;
  category: Category;


  constructor(public categoryService: CategoryService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('categoryId')) {
        this.mode = 'edit';
        this.categoryId = paramMap.get('categoryId');
        this.category = this.categoryService.getCategory(this.categoryId);
      }
      else {
        this.mode = 'create';
        this.categoryId = null;
      }
    });
  }

  onAddCategory(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.categoryService.addCategory(null, form.value.title, form.value.description, 0, 0);
    form.resetForm();

  }

}
