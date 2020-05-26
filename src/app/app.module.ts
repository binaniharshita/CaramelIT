// built in features
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
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
import { ListCourseComponent } from './admin-dashboard/manage-course/list-course/list-course.component';

// materials

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { CourseService } from './services/course.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';


import { routes } from './routes';
import { StudentUserService } from './shared-user/student/student-user.service';
import { InstructorUserService } from './shared-user/instructor/instructor-user.service';
import { CorporateUserService } from './shared-user/corporate/corporate-user.service';
import { UniversityUserService } from './shared-user/university/university-user.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';

// carousel module
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
// HEAD

import { AdminService } from './shared-user/admin/admin.service';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { RecommendationSystemComponent } from './recommendation-system/recommendation-system.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
// import { ReportsComponent } from './reports/reports.component';

import { ManageCategoryComponent } from './admin-dashboard/manage-category/manage-category.component';
import { CreateCategoryComponent } from './admin-dashboard/manage-category/create-category/create-category.component';
import { ListCategoryComponent } from './admin-dashboard/manage-category/list-category/list-category.component';
import { CategoryService } from './admin-dashboard/manage-category/category.service';
import { ManageSubcategoryComponent } from './admin-dashboard/manage-subcategory/manage-subcategory.component';
import { CreateSubcategoryComponent } from './admin-dashboard/manage-subcategory/create-subcategory/create-subcategory.component';
import { ListSubcategoryComponent } from './admin-dashboard/manage-subcategory/list-subcategory/list-subcategory.component';
import { ManageCourseComponent } from './admin-dashboard/manage-course/manage-course.component';
import { CreateCourseComponent } from './admin-dashboard/manage-course/create-course/create-course.component';
// import { ListCourseComponent } from './admin-dashboard/manage-course/list-course/list-course.component';


import { ViewParticularCourseComponent } from './admin-dashboard/manage-course/view-particular-course/view-particular-course.component';
import { MaganeCatSubcatComponent } from './admin-dashboard/magane-cat-subcat/magane-cat-subcat.component';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { SidebarComponent } from './admin-dashboard1/sidebar/sidebar.component';
import { AdminheaderComponent } from './admin-dashboard1/adminheader/adminheader.component';
import { AdminfooterComponent } from './admin-dashboard1/adminfooter/adminfooter.component';
import { ManageComponent } from './admin-dashboard1/sidebar/manage/manage.component';

import { CreateStructureComponent } from './admin-dashboard1/sidebar/manage/manage-structure/create-structure/create-structure.component';
import { ViewStructureComponent } from './admin-dashboard1/sidebar/manage/manage-structure/view-structure/view-structure.component';
import { AddCourseComponent } from './admin-dashboard1/sidebar/manage/manage-course/add-course/add-course.component';
import { ViewCourseComponent } from './admin-dashboard1/sidebar/manage/manage-course/view-course/view-course.component';
import { ReportsComponent } from './admin-dashboard1/sidebar/reports/reports.component';
import { WidgetAreaComponent } from './admin-dashboard1/sidebar/reports/widget-area/widget-area.component';
import { WidgetCardComponent } from './admin-dashboard1/sidebar/reports/widget-card/widget-card.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FileUploadModule } from 'ng2-file-upload';


// cbd25a4911795786a57e531898e05a64dbf8bb9b
// import {  ListCourseComponent} from './admin-dashboard/manage-course/list-course/list-course.component';

import { CoursePageComponent } from './course-page/course-page.component';
import { StudentCartComponent } from './student-cart/student-cart.component';
import { ProgramSwdComponent } from './program/program-swd/program-swd.component';
import { SubProgramComponent } from './program/sub-program/sub-program.component';
import { AcademypageComponent } from './academypage/academypage.component';
import { HowweworkComponent } from './academypage/howwework/howwework.component';
import { OurprogramComponent } from './academypage/ourprogram/ourprogram.component';
import { WhatweworkComponent } from './academypage/whatwework/whatwework.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InstructordashboardComponent } from './instructordashboard/instructordashboard.component';
import { CourseassociationComponent } from './instructordashboard/courseassociation/courseassociation.component';
import { ChoosecourseComponent } from './instructordashboard/courseassociation/choosecourse/choosecourse.component';
import { ListcourseComponent } from './instructordashboard/courseassociation/listcourse/listcourse.component';
import { DissociateComponent } from './instructordashboard/courseassociation/dissociate/dissociate.component';

import { SkillsComponent } from './instructordashboard/skills/skills.component';
import { AddskillComponent } from './instructordashboard/skills/addskill/addskill.component';
import { SkillsetComponent } from './instructordashboard/skills/skillset/skillset.component';

import { StudentsComponent } from './instructordashboard/students/students.component';
import { TopTransformationComponent } from './academypage/top-transformation/top-transformation.component';
import { WhyCaramelItComponent } from './academypage/why-caramel-it/why-caramel-it.component';
import { CollegeDashboardComponent } from './college-dashboard/college-dashboard.component';
import { DashboardComponent } from './college-dashboard/dashboard/dashboard.component';
import { CollegeCouseComponent } from './college-dashboard/college-couse/college-couse.component';
import { CollegeCourseComponent } from './college-dashboard/college-course/college-course.component';
import { CoursesOptionsComponent } from './academypage/courses-options/courses-options.component';
import { FeaturedCoursesComponent } from './academypage/featured-courses/featured-courses.component';




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
    ResponseResetComponent,
    RecommendationSystemComponent,
    QuestionBankComponent,
    // ReportsComponent,
    ManageCategoryComponent,
    CreateCategoryComponent,
    ListCategoryComponent,
    ManageSubcategoryComponent,
    CreateSubcategoryComponent,
    ListSubcategoryComponent,
    ManageCourseComponent,
    CreateCourseComponent,
    ReportsComponent,
    WidgetAreaComponent,
    WidgetCardComponent,
    ResponseResetComponent,
    MaganeCatSubcatComponent,
    AdminDashboard1Component,
    SidebarComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    ManageComponent,
    CreateStructureComponent,
    ViewStructureComponent,
    AddCourseComponent,
    ViewCourseComponent,
    ViewParticularCourseComponent,
    ResponseResetComponent,
    CoursePageComponent,
    StudentCartComponent,
    ProgramSwdComponent,
    SubProgramComponent,
    AcademypageComponent,
    StudentDashboardComponent,
    HowweworkComponent,
    OurprogramComponent,
    WhatweworkComponent,
    CarouselComponent,
    InstructordashboardComponent,
    CourseassociationComponent,
    ChoosecourseComponent,
    ListcourseComponent,
    DissociateComponent,
    SkillsComponent,
    AddskillComponent,
    SkillsetComponent,
    StudentsComponent,
    TopTransformationComponent,
    WhyCaramelItComponent,
    CollegeDashboardComponent,
    DashboardComponent,
    CollegeCouseComponent,
    CollegeCourseComponent,
    CoursesOptionsComponent,
    FeaturedCoursesComponent,
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
    MatDialogModule,
    HighchartsChartModule,
    FileUploadModule,
    MatDialogModule,
    MatExpansionModule,
    SlickCarouselModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    // tslint:disable-next-line: max-line-length
  }, AdminService, AuthGuard, CourseService, StudentUserService, InstructorUserService, CorporateUserService, UniversityUserService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
