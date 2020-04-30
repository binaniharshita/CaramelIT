//built in features
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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


//routes
import { routes } from './routes';

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
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
