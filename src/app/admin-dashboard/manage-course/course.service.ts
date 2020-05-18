import { Course } from './course.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [];
  private coursesUpdated = new Subject<Course[]>();

  content: JSON;
  sharedData: string;


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

  // Uploading lesson file route
  addLessonFile(title: string, file: File) {
    const fileData = new FormData();
    fileData.append('title', title);
    fileData.append('lesson', file, title);

    this.http.post<{ message: string, content: JSON }>('http://localhost:3000/api/courses/upload/lesson', fileData)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }
  addProjectFile(title: string, file: File) {
    const fileData = new FormData();
    fileData.append('title', title);
    fileData.append('project', file, title);

    this.http.post<{ message: string, content: JSON }>('http://localhost:3000/api/courses/upload/project', fileData)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }
  addTestFile(title: string, file: File) {
    const fileData = new FormData();
    fileData.append('title', title);
    fileData.append('test', file, title);

    this.http.post<{ message: string}>('http://localhost:3000/api/courses/upload/test', fileData)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }
  addScenarioFile( file: File) {
    console.log(file);
    const fileData = new FormData();
    fileData.append('scenario', file);

    this.http.post<{ message: string }>('http://localhost:3000/api/courses/upload/scenario', fileData)
      .subscribe((responseData) => {
        console.log(responseData.message);
      });
  }

  addCourse(id: null, title: string, description: string, noOfModule: number, subCatId: string, image: File) {
    const contentString = JSON.stringify(this.content);
    const courseData = new FormData();
    courseData.append('title', title);
    courseData.append('description', description);
    courseData.append('subCatId', subCatId);
    courseData.append('image', image, title);

    this.http.post<{ message: string, courseId: string, content: string }>('http://localhost:3000/api/courses', courseData)
      .subscribe((responseData) => {
        const courseAdd: Course = { id: responseData.courseId, title, description, subCatId, noOfModule };
        this.courses.push(courseAdd);
        this.coursesUpdated.next([...this.courses]);
      });

  }

  updateCourse(id: string, title: string, description: string, noOfModule: number, subCatId: string, content: string) {
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
  uploadContent() {

  }

}
