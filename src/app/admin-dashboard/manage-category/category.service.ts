import { Category } from './category.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private categories: Category[] = [];
  private categoriesUpdated = new Subject<Category[]>();


  constructor(private http: HttpClient, private router: Router) { }
  getCategories() {
    this.http.get<{ message: string, categories: any }>('http://localhost:3000/api/categories')
      .pipe(
        map(categoriesData => {
          return categoriesData.categories.map(category => {
            return {
              title: category.title,
              description: category.description,
              noOfCourses: category.noOfCourses,
              noOfSubCategories: category.noOfSubCategories,
              id: category._id,
              imagePath: category.imagePath,
            };
          });
        }))
      .subscribe((transformedData) => {
        this.categories = transformedData;
        this.categoriesUpdated.next([...this.categories]);
      });
  }

  getCategory(id: string) {
    return this.http.get<{
      _id: string,
      title: string,
      description: string,
      noOfSubCategories: number,
      noOfCourse: number,
      imagePath: string
    }>(
      'http://localhost:3000/api/categories/' + id
    );
  }
  getCategoriesUpdateListener() {
    return this.categoriesUpdated.asObservable();
  }

  addCategory(title: string, description: string, image: File) {
    const categoryData = new FormData();
    categoryData.append('title', title);
    categoryData.append('description', description);
    categoryData.append('image', image, title);

    this.http.post<{ message: string, category: Category }>('http://localhost:3000/api/categories', categoryData)
      .subscribe((categoriesData) => {
        const categoryAdd: Category = {
          id: categoriesData.category.id,
          title,
          description,
          imagePath: categoriesData.category.imagePath,
          noOfSubCategories: categoriesData.category.noOfSubCategories,
          noOfCourses: categoriesData.category.noOfCourses
        };

        this.categories.push(categoryAdd);
        this.categoriesUpdated.next([...this.categories]);
      });

  }

  updateCategory(id: string, title: string, description: string, image: File | string) {
    // const category: Category = { id, title, description, noOfSubCategories, noOfCourses };

    let categoryData: Category | FormData;
    if (typeof image === 'object') {
      categoryData = new FormData();
      categoryData.append('id', id);
      categoryData.append('title', title);
      categoryData.append('description', description);
      categoryData.append('image', image, title);
    } else {
      categoryData = {
        id,
        title,
        description,
        imagePath: image,
        noOfSubCategories: 0,
        noOfCourses: 0,
      };
    }
    this.http.put('http://localhost:3000/api/categories/' + id, categoryData)
      .subscribe(data => {
        const updatedCategory = [...this.categories];
        const oldCategoryIndex = updatedCategory.findIndex(c => c.id === id);
        const category: Category = {
          id,
          title,
          description,
          noOfSubCategories: 0,
          noOfCourses: 0,
          imagePath: '',
        };
        updatedCategory[oldCategoryIndex] = category;
        this.categories = updatedCategory;
        this.categoriesUpdated.next([...this.categories]);
        this.router.navigate(['/']);
      });
  }


  deleteCategory(categoryId: string) {
    this.http.delete('http://localhost:3000/api/categories/' + categoryId).subscribe(() => {
      console.log(' Deleted ');
      const updtedCategory = this.categories.filter(category => category.id !== categoryId);
      this.categories = updtedCategory;
      this.categoriesUpdated.next([...this.categories]);
    }

    );
  }

}
