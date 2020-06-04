import { Course } from './course.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [];
  private coursesUpdated = new Subject<Course[]>();

  content: JSON;
  sharedData: string;


  constructor(private http: HttpClient, private router: Router) { }


  // GET ALL COURSE
  getCourses() {
    this.http
      .get<{ message: string, courses: any }>('http://localhost:3000/api/courses')
      .pipe(
        map(coursesData => {
          console.log(coursesData);
          return coursesData.courses.map(course => {
            return {
              title: course.title,
              description: course.description,
              id: course._id,
              subCatId: course.subcategory,
              imagePath: course.imagePath,
              contentModule: course.modules,
            };
          });
        }))
      .subscribe((transformedData) => {
        this.courses = transformedData;
        this.coursesUpdated.next([...this.courses]);
      });
  }
  getCoursesUpdateListener() {
    return this.coursesUpdated.asObservable();
  }
  getCourse(id: string) {
    return this.http.get<{ _id: string, title: string, description: string, subCatId: string, imagePath: string, module: string }>(
      'http://localhost:3000/api/courses/' + id
    );
  }
  // GET ROUTE OVER

  // ADD COURSE LOGIC
  addCourse(title: string, description: string, subCatId: string, image: File) {
    const courseData = new FormData();
    courseData.append('title', title);
    courseData.append('description', description);
    courseData.append('subcategoryId', subCatId);
    courseData.append('image', image, title);
    this.http
      .post<{ message: string, course: any }>(
        'http://localhost:3000/api/courses',
        courseData
      )
      .subscribe((responseData) => {
        const courseAdd: Course = {
          id: responseData.course.id,
          title,
          description,
          subCatId: responseData.course.subcategory,
          imagePath: responseData.course.imagePath,
          contentModule: responseData.course.modules,
        };
        this.courses.push(courseAdd);
        this.coursesUpdated.next([...this.courses]);
        this.router.navigate(['/']);
      });

  }

  // UPDATE COURSE LOGIC
  updateCourse(id: string, title: string, description: string, subCatId: string, image: File | string) {
    let courseData: Course | FormData;
    if (typeof image === 'object') {
      courseData = new FormData();
      courseData.append('id', id);
      courseData.append('title', title);
      courseData.append('description', description);
      courseData.append('image', image, title);
    } else {
      courseData = {
        id,
        title,
        description,
        imagePath: image,
        subCatId,
        contentModule: '',
      };
    }

    this.http.put('http://localhost:3000/api/categories/' + id, courseData)
      .subscribe(response => {
        const updatedCourses = [...this.courses];
        const oldCourseIndex = updatedCourses.findIndex(c => c.id === id);
        const course: Course = {
          id,
          title,
          description,
          subCatId,
          imagePath: '',
          contentModule: '',
        };
        updatedCourses[oldCourseIndex] = course;
        this.courses = updatedCourses;
        this.coursesUpdated.next([...this.courses]);
        this.router.navigate(['/']);

      });
  }

  // DELETE COURSE LOGIC
  deleteCourse(courseId: string) {
    this.http
      .delete('http://localhost:3000/api/courses/' + courseId)
      .subscribe(() => {
        const updatedCoures = this.courses.filter(course => course.id !== courseId);
        this.courses = updatedCoures;
        this.coursesUpdated.next([...this.courses]);
      }

      );
  }

  // Uploading lesson file route
  addLessonFile(file: File) {
    const fileData = new FormData();
    fileData.append('lesson', file);

    this.http.post<{ message: string }>('http://localhost:3000/api/courses/upload/lesson', fileData)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }

  // Add Project file
  addProjectFile(file: File) {
    const fileData = new FormData();
    fileData.append('project', file);

    this.http.post<{ message: string }>('http://localhost:3000/api/courses/upload/project', fileData)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }

  // Add test file
  addTestFile(file: File) {
    const fileData = new FormData();
    fileData.append('test', file);

    this.http.post<{ message: string }>('http://localhost:3000/api/courses/upload/test', fileData)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }

  // Add scenario file
  addScenarioFile(file: File) {
    console.log(file);
    const fileData = new FormData();
    fileData.append('scenario', file);

    this.http.post<{ message: string }>('http://localhost:3000/api/courses/upload/scenario', fileData)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }

  // Add Module file
  addModule() {
    const title = '';
    this.http.post<{ message: string }>('http://localhost:3000/api/module/create', title)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }



}
