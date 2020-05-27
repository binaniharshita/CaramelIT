import { SubCategory } from './subcategory.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SubCategoryService {
  private subcategories: SubCategory[] = [];
  private subCategoriesUpdated = new Subject<SubCategory[]>();


  constructor(private http: HttpClient, private router: Router) { }
  getSubCategories() {
    this.http.get<{ message: string, subcategories: any }>('http://localhost:3000/api/subcategories')
      .pipe(map(subcategoriesData => {
        return subcategoriesData.subcategories.map(subcategory => {
          return {
            title: subcategory.title,
            description: subcategory.description,
            noOfCourses: subcategory.noOfCourses,
            id: subcategory._id,
            catId: subcategory.catId,
            imagePath: subcategory.imagePath,
          };
        });
      }))
      .subscribe((transformedData) => {
        console.log(transformedData);
        this.subcategories = transformedData;
        this.subCategoriesUpdated.next([...this.subcategories]);
      });
  }
  getSubCategory(id: string) {
    return this.http.get<{
      _id: string,
      title: string,
      description: string,
      catId: string,
      noOfCourse: number,
      imagePath: string
    }>(
      'http://localhost:3000/api/subcategories/' + id
    );
  }
  getSubCategoriesUpdateListener() {
    return this.subCategoriesUpdated.asObservable();
  }

  addSubCategory(title: string, description: string, catId: string, image: File) {
    const subCategoryData = new FormData();
    subCategoryData.append('title', title);
    subCategoryData.append('description', description);
    subCategoryData.append('catId', catId);
    subCategoryData.append('image', image, title);
    console.log(subCategoryData);
    this.http.post<{ message: string, subCategory: SubCategory }>('http://localhost:3000/api/subcategories', subCategoryData)
      .subscribe((subcategoriesData) => {
        const subCategoryAdd: SubCategory = {
          id: subcategoriesData.subCategory.id,
          title,
          description,
          imagePath: subcategoriesData.subCategory.imagePath,
          catId,
          noOfCourses: subcategoriesData.subCategory.noOfCourses
        };
        this.subcategories.push(subCategoryAdd);
        this.subCategoriesUpdated.next([...this.subcategories]);
      });

  }

  updateCategory(id: string, title: string, image: File | string, description: string, catId: string) {
    let subCategoryData: SubCategory | FormData;
    if (typeof image === 'object') {
      subCategoryData = new FormData();
      subCategoryData.append('id', id);
      subCategoryData.append('title', title);
      subCategoryData.append('description', description);
      subCategoryData.append('catId', catId);
      subCategoryData.append('image', image, title);
    } else {
      subCategoryData = {
        id,
        title,
        description,
        imagePath: image,
        catId,
        noOfCourses: 0,
      };
    }


    this.http.put('http://localhost:3000/api/subcategories/' + id, subCategoryData)
      .subscribe(data => {
        const updatedSubCategory = [...this.subcategories];
        const oldSubCategoryIndex = updatedSubCategory.findIndex(c => c.id === id);
        const subCategory: SubCategory = {
          id,
          title,
          description,
          catId,
          noOfCourses: 0,
          imagePath: '',
        };
        updatedSubCategory[oldSubCategoryIndex] = subCategory;
        this.subcategories = updatedSubCategory;
        this.subCategoriesUpdated.next([...this.subcategories]);
        this.router.navigate(['/']);
      });
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
