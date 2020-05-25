import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../admin-dashboard/manage-category/category.service';

import { CourseService } from 'src/app/services/course.service';
import { Category } from 'src/app/admin-dashboard/manage-category/category.model';
import { Subscription } from 'rxjs';
// import { SubPrograms, subprograms } from 'src/app/shared/subprograms';


@Component({
  selector: 'app-program-swd',
  templateUrl: './program-swd.component.html',
  styleUrls: ['./program-swd.component.css']
})
export class ProgramSwdComponent implements OnInit {
  id: string;
  categories: Category[] = [];
  categorySubs: Subscription;
  isLoading: false;
  category: Category;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  // selectedsubprog: SubPrograms;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.categoryService.getCategories();
    this.categorySubs = this.categoryService.getCategoriesUpdateListener()
      .subscribe((categories: Category[]) => {
        this.isLoading = false;
        this.categories = categories;
        this.category = this.categories.filter(c => c.id === this.id)[0];
        console.log(this.category);
      });



    AOS.init({
      duration: 400,
    });
  }

  selectedSubprog(subprog: string) {
    this.courseService.selectedSubprogam(subprog);

  }

}
