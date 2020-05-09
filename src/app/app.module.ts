// built in features
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// components
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
import { ListCourseComponent } from './list-course/list-course.component';


//materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { CourseService } from './services/course.service';
import {MatDialogModule} from '@angular/material/dialog';


//routes
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
// HEAD
=======
import { AdminService } from './shared-user/admin/admin.service';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { RecommendationSystemComponent } from "./recommendation-system/recommendation-system.component";
import { QuestionBankComponent } from "./question-bank/question-bank.component";
import { ReportsComponent } from './reports/reports.component';

>>>>>>> 73f0b3b62d05045f4ddd2bcd198ec57d9f390e90
import { ManageCategoryComponent } from './admin-dashboard/manage-category/manage-category.component';
import { CreateCategoryComponent } from './admin-dashboard/manage-category/create-category/create-category.component';
import { ListCategoryComponent } from './admin-dashboard/manage-category/list-category/list-category.component';
import { CategoryService } from './admin-dashboard/manage-category/category.service';
import { ManageSubcategoryComponent } from './admin-dashboard/manage-subcategory/manage-subcategory.component';
import { CreateSubcategoryComponent } from './admin-dashboard/manage-subcategory/create-subcategory/create-subcategory.component';
import { ListSubcategoryComponent } from './admin-dashboard/manage-subcategory/list-subcategory/list-subcategory.component';
import { ManageCourseComponent } from './admin-dashboard/manage-course/manage-course.component';
import { CreateCourseComponent } from './admin-dashboard/manage-course/create-course/create-course.component';
<<<<<<< HEAD
import { ListCourseComponent } from './admin-dashboard/manage-course/list-course/list-course.component';

import { AdminService } from './shared-user/admin/admin.service';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { MaganeCatSubcatComponent } from './admin-dashboard/magane-cat-subcat/magane-cat-subcat.component';
// cbd25a4911795786a57e531898e05a64dbf8bb9b

=======
>>>>>>> 73f0b3b62d05045f4ddd2bcd198ec57d9f390e90
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
// <<<<<<< HEAD
=======
    ResponseResetComponent,
    RecommendationSystemComponent,
    QuestionBankComponent,
    ReportsComponent,
>>>>>>> 73f0b3b62d05045f4ddd2bcd198ec57d9f390e90
    ManageCategoryComponent,
    CreateCategoryComponent,
    ListCategoryComponent,
    ManageSubcategoryComponent,
    CreateSubcategoryComponent,
    ListSubcategoryComponent,
    ManageCourseComponent,
    CreateCourseComponent,
<<<<<<< HEAD

    ResponseResetComponent,

    MaganeCatSubcatComponent,

=======
>>>>>>> 73f0b3b62d05045f4ddd2bcd198ec57d9f390e90
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
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
<<<<<<< HEAD
  }, AuthGuard, CourseService, StudentUserService, InstructorUserService, CorporateUserService, UniversityUserService, CategoryService],
=======
  }, AuthGuard, CourseService, AdminService, StudentUserService, InstructorUserService, CorporateUserService, UniversityUserService],
>>>>>>> 73f0b3b62d05045f4ddd2bcd198ec57d9f390e90
  bootstrap: [AppComponent]
})
export class AppModule { }
