<<<<<<< HEAD
import { Category } from './category.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private categories: Category[] = [];
  private categoriesUpdated = new Subject<Category[]>();


  constructor(private http: HttpClient) { }
  getCategories() {
    this.http.get<{ message: string, categories: any }>('http://localhost:3000/api/categories').pipe(map((categoriesData) => {
        return categoriesData.categories.map(category => {
          return {
            title: category.title,
            description: category.description,
            noOfCourses: category.noOfCourses,
            noOfSubCategories: category.noOfSubCategories,
            id: category._id
          };
        });
      }))
      .subscribe((transformedData) => {
        console.log(transformedData);
        this.categories = transformedData;
        this.categoriesUpdated.next([...this.categories]);
      });
  }
  getCategoriesUpdateListener() {
    return this.categoriesUpdated.asObservable();
  }

  addCategory(id: null, title: string, description: string, noOfSubCategories: number, noOfCourses: number) {
    const category: Category = { id, title, description, noOfSubCategories, noOfCourses };
    this.http.post<{ message: string, categoryId: string }>('http://localhost:3000/api/categories', category)
      .subscribe((categoriesData) => {
        console.log(categoriesData);
        category.id = categoriesData.categoryId;
        this.categories.push(category);
        this.categoriesUpdated.next([...this.categories]);
      });

  }

  updateCategory(id: string, title: string, description: string, noOfSubCategories: number, noOfCourses: number) {
    const category: Category = { id, title, description, noOfSubCategories, noOfCourses };
    this.http.put('http://localhost:3000/api/categories/' + id, category)
    .subscribe(data => {
      console.log(data);

    });
  }

  getCategory(id: string) {
    return { ...this.categories.find(c => c.id === id) };
  }
  deleteCategory(categoryId: string) {
    console.log(categoryId);
    this.http.delete('http://localhost:3000/api/categories/' + categoryId).subscribe(() => {
      console.log(' Deleted ');
      const updtedCategory = this.categories.filter(category => category.id !== categoryId);
      this.categories = updtedCategory;
      this.categoriesUpdated.next([...this.categories]);
    }

    );
  }

}
=======
import { Category } from './category.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private categories: Category[] = [];
  private categoriesUpdated = new Subject<Category[]>();


  constructor(private http: HttpClient) { }
  getCategories() {
    this.http.get<{ message: string, categories: any }>('http://localhost:3000/api/categories').pipe(map((categoriesData) => {
        return categoriesData.categories.map(category => {
          return {
            title: category.title,
            description: category.description,
            noOfCourses: category.noOfCourses,
            noOfSubCategories: category.noOfSubCategories,
            id: category._id
          };
        });
      }))
      .subscribe((transformedData) => {
        console.log(transformedData);
        this.categories = transformedData;
        this.categoriesUpdated.next([...this.categories]);
      });
  }
  getCategoriesUpdateListener() {
    return this.categoriesUpdated.asObservable();
  }

  addCategory(id: null, title: string, description: string, noOfSubCategories: number, noOfCourses: number) {
    const category: Category = { id, title, description, noOfSubCategories, noOfCourses };
    this.http.post<{ message: string, categoryId: string }>('http://localhost:3000/api/categories', category)
      .subscribe((categoriesData) => {
        console.log(categoriesData);
        category.id = categoriesData.categoryId;
        this.categories.push(category);
        this.categoriesUpdated.next([...this.categories]);
      });

  }

  updateCategory(id: string, title: string, description: string, noOfSubCategories: number, noOfCourses: number) {
    const category: Category = { id, title, description, noOfSubCategories, noOfCourses };
    this.http.put('http://localhost:3000/api/categories/' + id, category)
    .subscribe(data => {
      console.log(data);

    });
  }

  getCategory(id: string) {
    return { ...this.categories.find(c => c.id === id) };
  }
  deleteCategory(categoryId: string) {
    console.log(categoryId);
    this.http.delete('http://localhost:3000/api/categories/' + categoryId).subscribe(() => {
      console.log(' Deleted ');
      const updtedCategory = this.categories.filter(category => category.id !== categoryId);
      this.categories = updtedCategory;
      this.categoriesUpdated.next([...this.categories]);
    }

    );
  }

}
>>>>>>> 8ed553dd8625d2ae24959feee22832d9125272d3
