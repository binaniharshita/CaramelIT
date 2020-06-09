import { Course, Module, Lesson } from './course.model';
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
            const lesson = course.modules[0].lessons;
            let lessonName;
            let lessonTime;
            let lessonSNo;
            let lessonId;
            let lessonPPT;
            const lesson1: Lesson[] = [];
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < lesson.length; i++) {
              const element = lesson[i];
              lessonName = element.Lessons_List;
              lessonTime = element.Lessons_Time;
              lessonSNo = element.S_No;
              lessonId = element._id;
              lessonPPT = element.Ppt_link;
              lesson1.push({ lessonsName: lessonName, lessonsTime: lessonTime, sno: lessonSNo, pptLink: lessonPPT })
            }


            const project = course.modules.lessons;
            console.log(lesson);
            const scenario = course.modules.lessons;
            const test = course.modules.lessons;
            const module: Module = { lesson: lesson1, scenario, project, test };
            console.log(module);
            return {
              title: course.title,
              description: course.description,
              id: course._id,
              subCatId: course.subcategory,
              imagePath: course.imagePath,
              contentModule: module,
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
          id: responseData.course._id,
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
  // updateCourse(id: string, title: string, description: string, subCatId: string, image: File | string) {
  //   let courseData: Course | FormData;
  //   if (typeof image === 'object') {
  //     courseData = new FormData();
  //     courseData.append('id', id);
  //     courseData.append('title', title);
  //     courseData.append('description', description);
  //     courseData.append('image', image, title);
  //   } else {
  //     courseData = {
  //       id,
  //       title,
  //       description,
  //       imagePath: image,
  //       subCatId,
  //       contentModule : contentModule1,
  //     };
  //   }

  //   this.http.put<{ message: string, course: any }>('http://localhost:3000/api/categories/' + id, courseData)
  //     .subscribe(response => {
  //       const contentModuleBack = response.course.modules;
  //       const updatedCourses = [...this.courses];
  //       const oldCourseIndex = updatedCourses.findIndex(c => c.id === id);
  //       const course: Course = {
  //         id,
  //         title,
  //         description,
  //         subCatId,
  //         imagePath: '',
  //         contentModule: contentModuleBack,
  //       };
  //       updatedCourses[oldCourseIndex] = course;
  //       this.courses = updatedCourses;
  //       this.coursesUpdated.next([...this.courses]);
  //       this.router.navigate(['/']);

  //     });
  // }

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
