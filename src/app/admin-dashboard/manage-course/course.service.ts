import { Course } from './course.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [];
  private coursesUpdated = new Subject<Course[]>();


  constructor(private http: HttpClient) { }
  getCourses() {
    this.http.get<{ message: string, courses: any }>('http://localhost:3000/api/courses').pipe(map((coursesData) => {
      console.log(coursesData);
      return coursesData.courses.map(course => {
        console.log(course);
        return {
          title: course.title,
          description: course.description,
          noOfModule: course.noOfModules,
          id: course._id,
          subCatId: course.subCatId
        };
      });
    }))
      .subscribe((transformedData) => {
        console.log(transformedData);
        this.courses = transformedData;
        this.coursesUpdated.next([...this.courses]);
      });
  }
  getCoursesUpdateListener() {
    return this.coursesUpdated.asObservable();
  }

  addCourse(id: null, title: string, description: string, noOfModule: number, subCatId: string, image: File) {
    const courseData = new FormData();
    courseData.append('title', title);
    courseData.append('description', description);
    courseData.append('subCatId', subCatId);
    courseData.append('image', image , title);
    const course: Course = { id, title, description, noOfModule, subCatId };
    this.http.post<{ message: string, courseId: string }>('http://localhost:3000/api/courses', courseData)
      .subscribe((responseData) => {
        const courseAdd: Course = { id: responseData.courseId,  title, description, subCatId, noOfModule }
        this.courses.push(courseAdd);
        this.coursesUpdated.next([...this.courses]);
      });

  }

  updateCourse(id: string, title: string, description: string, noOfModule: number, subCatId: string) {
    const course: Course = { id, title, description, noOfModule, subCatId };
    this.http.put('http://localhost:3000/api/categories/' + id, course)
      .subscribe(data => {
        console.log(data);

      });
  }

  getCourse(id: string) {
    return { ...this.courses.find(c => c.id === id) };
  }
  deleteCourse(courseId: string) {
    console.log(courseId);
    this.http.delete('http://localhost:3000/api/courses/' + courseId).subscribe(() => {
      console.log(' Deleted ');
      const updatedCoures = this.courses.filter(course => course.id !== courseId);
      this.courses = updatedCoures;
      this.coursesUpdated.next([...this.courses]);
    }

    );
  }
  uploadContent(){

  }

}
