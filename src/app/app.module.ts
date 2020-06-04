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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';


//routes
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
import { AdminService } from './shared-user/admin/admin.service';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { UserCoursePageComponent } from './user-course-page/user-course-page.component';
import { StudentCartComponent } from './student-cart/student-cart.component';
import { ProgramSwdComponent } from './program/program-swd/program-swd.component';
import { SubProgramComponent } from './program/sub-program/sub-program.component';
import { CarouselComponent } from './carousel/carousel.component';
import { UserCourseContentDisplayComponent } from './user-course-page/user-course-content-display/user-course-content-display.component';
import { UserCoursePageTabsComponent } from './user-course-page/user-course-page-tabs/user-course-page-tabs.component';
import { UserCourseInfoTabComponent } from './user-course-page/user-course-info-tab/user-course-info-tab.component';
import { UserCourseSkillsComponent } from './user-course-page/user-course-info-tab/user-course-skills/user-course-skills.component';
import { UserCourseInfoDropdownsComponent } from './user-course-page/user-course-info-tab/user-course-info-dropdowns/user-course-info-dropdowns.component';
import { UserEnrollPanelComponent } from './user-course-page/user-enroll-panel/user-enroll-panel.component';
import { UserTableOfContentsTabComponent } from './user-course-page/user-table-of-contents-tab/user-table-of-contents-tab.component';
import { UserCourseProjectsTabComponent } from './user-course-page/user-course-projects-tab/user-course-projects-tab.component';
import { UserReviewsTabComponent } from './user-course-page/user-reviews-tab/user-reviews-tab.component';



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
    UserCoursePageComponent,
    StudentCartComponent,
    ProgramSwdComponent,
    SubProgramComponent,
    CarouselComponent,
    UserCourseContentDisplayComponent,
    UserCoursePageTabsComponent,
    UserCourseInfoTabComponent,
    UserCourseSkillsComponent,
    UserCourseInfoDropdownsComponent,
    UserEnrollPanelComponent,
    UserTableOfContentsTabComponent,
    UserCourseProjectsTabComponent,
    UserReviewsTabComponent,
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
    MatExpansionModule,
    SlickCarouselModule,
    MatTabsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, CourseService, AdminService, StudentUserService, InstructorUserService, CorporateUserService, UniversityUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
