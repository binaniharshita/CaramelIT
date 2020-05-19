//built in features
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//components
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { UniversitySigninComponent } from './university-signin/university-signin.component';
import { UniversityRegisterComponent } from './university-register/university-register.component';
import { CorporateSigninComponent } from './corporate-signin/corporate-signin.component';
import { CorporateRegisterComponent } from './corporate-register/corporate-register.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InstructorSigninComponent } from './instructor-signin/instructor-signin.component';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VideosectionComponent } from './videosection/videosection.component';


import { CurrentvideoComponent } from './currentvideo/currentvideo.component';
import { PageContentComponent } from './page-content/page-content.component';
import { OtherCoursesComponent } from './other-courses/other-courses.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
// import { ListtCourseComponent } from './list-course/list-course.component';


// materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { CourseService } from './services/course.service';
<<<<<<< HEAD
=======
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
>>>>>>> 5b96b7902dc5388c99ed787b653a14c297b96d78



// routes
import { routes } from './routes';
import { StudentUserService } from './shared-user/student/student-user.service';
import { InstructorUserService } from './shared-user/instructor/instructor-user.service';
import { CorporateUserService } from './shared-user/corporate/corporate-user.service';
import { UniversityUserService } from './shared-user/university/university-user.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
<<<<<<< HEAD
import { ManageCategoryComponent } from './admin-dashboard/manage-category/manage-category.component';
import { CreateCategoryComponent } from './admin-dashboard/manage-category/create-category/create-category.component';
import { ListCategoryComponent } from './admin-dashboard/manage-category/list-category/list-category.component';
import { CategoryService } from './admin-dashboard/manage-category/category.service';
import { ManageSubcategoryComponent } from './admin-dashboard/manage-subcategory/manage-subcategory.component';
import { CreateSubcategoryComponent } from './admin-dashboard/manage-subcategory/create-subcategory/create-subcategory.component';
import { ListSubcategoryComponent } from './admin-dashboard/manage-subcategory/list-subcategory/list-subcategory.component';
import { ManageCourseComponent } from './admin-dashboard/manage-course/manage-course.component';
import { CreateCourseComponent } from './admin-dashboard/manage-course/create-course/create-course.component';
import {  ListCourseComponent} from './admin-dashboard/manage-course/list-course/list-course.component';
=======
import { AdminService } from './shared-user/admin/admin.service';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { StudentCartComponent } from './student-cart/student-cart.component';
import { ProgramSwdComponent } from './program/program-swd/program-swd.component';
import { SubProgramComponent } from './program/sub-program/sub-program.component';
>>>>>>> 5b96b7902dc5388c99ed787b653a14c297b96d78

@NgModule({
  declarations: [
    AppComponent,
    AdminSigninComponent,
    UniversitySigninComponent,
    UniversityRegisterComponent,
    CorporateSigninComponent,
    CorporateRegisterComponent,
    StudentSigninComponent,
    StudentRegisterComponent,
    ContactusComponent,
    InstructorSigninComponent,
    InstructorRegisterComponent,
    ForgotPwComponent,
    NavbarComponent,
    HomepageComponent,
    VideosectionComponent,
    CurrentvideoComponent,
    PageContentComponent,
    OtherCoursesComponent,
    FooterComponent,
    AdminDashboardComponent,
    UserListComponent,
    CollegeListComponent,
    InstructorListComponent,
    OrganisationListComponent,
    ListCourseComponent,
    ProfilePageComponent,
    AdminRegisterComponent,
<<<<<<< HEAD
    ManageCategoryComponent,
    CreateCategoryComponent,
    ListCategoryComponent,
    ManageSubcategoryComponent,
    CreateSubcategoryComponent,
    ListSubcategoryComponent,
    ManageCourseComponent,
    CreateCourseComponent,
=======
    ResponseResetComponent,
    CoursePageComponent,
    StudentCartComponent,
    ProgramSwdComponent,
    SubProgramComponent,
>>>>>>> 5b96b7902dc5388c99ed787b653a14c297b96d78
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
=======
    MatDialogModule,
    MatExpansionModule
>>>>>>> 5b96b7902dc5388c99ed787b653a14c297b96d78
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
<<<<<<< HEAD
  }, AuthGuard, CourseService, StudentUserService, InstructorUserService, CorporateUserService, UniversityUserService, CategoryService],
=======
  }, AuthGuard, CourseService, AdminService, StudentUserService, InstructorUserService, CorporateUserService, UniversityUserService],
>>>>>>> 5b96b7902dc5388c99ed787b653a14c297b96d78
  bootstrap: [AppComponent]
})
export class AppModule { }
