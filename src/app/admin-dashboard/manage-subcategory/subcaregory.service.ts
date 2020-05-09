import { SubCategory } from './subcategory.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SubCategoryService {
  private subcategories: SubCategory[] = [];
  private subCategoriesUpdated = new Subject<SubCategory[]>();


  constructor(private http: HttpClient) { }
  getSubCategories() {
    this.http.get<{ message: string, subcategories: any }>('http://localhost:3000/api/subcategories')
      .pipe(map((subcategoriesData) => {
        return subcategoriesData.subcategories.map(subcategory => {
          return {
            title: subcategory.title,
            description: subcategory.description,
            noOfCourses: subcategory.noOfCourses,
            id: subcategory._id,
            catId: subcategory.catId
          };
        });
      }))
      .subscribe((transformedData) => {
        console.log(transformedData);
        this.subcategories = transformedData;
        this.subCategoriesUpdated.next([...this.subcategories]);
      });
  }
  getSubCategoriesUpdateListener() {
    return this.subCategoriesUpdated.asObservable();
  }

  addSubCategory(id: null, title: string, description: string, noOfCourses: number, catId: string) {
    const subcategory: SubCategory = { id, title, description, noOfCourses, catId };
    this.http.post<{ message: string, subcategoryId: string }>('http://localhost:3000/api/subcategories', subcategory)
      .subscribe((subcategoriesData) => {
        console.log(subcategoriesData);
        subcategory.id = subcategoriesData.subcategoryId;
        this.subcategories.push(subcategory);
        this.subCategoriesUpdated.next([...this.subcategories]);
      });

  }

  updateCategory(id: string, title: string, description: string, noOfCourses: number,catId: string) {
    const subcategory: SubCategory = { id, title, description, noOfCourses,catId};
    this.http.put('http://localhost:3000/api/subcategories/' + id, subcategory)
    .subscribe(data => {
      console.log(data);

    });
  }

  getSubCategory(id: string) {
    return { ...this.subcategories.find(sc => sc.id === id) };
  }
  deleteSubCategory(subcateoryId: string) {
    console.log(subcateoryId);
    this.http.delete('http://localhost:3000/api/subcategories/' + subcateoryId).subscribe(() => {
      console.log(' Deleted ');
      const updtedSubCategory = this.subcategories.filter(subcategory => subcategory.id !== subcateoryId);
      this.subcategories = updtedSubCategory;
      this.subCategoriesUpdated.next([...this.subcategories]);
    }

    );
  }

}
