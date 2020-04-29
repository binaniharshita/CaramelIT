
import { Routes } from '@angular/router';

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

import { HomepageComponent } from './homepage/homepage.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { ListCourseComponent } from './list-course/list-course.component';


export const routes: Routes = [
  { path:'', pathMatch:'full' , component: HomepageComponent },
  { path:'student-signin' , component: StudentSigninComponent },
  { path:'student-register' , component: StudentRegisterComponent },
  { path:'instructor-signin', component: InstructorSigninComponent},
  { path:'instructor-register', component: InstructorRegisterComponent },
  { path:'corporate-signin' , component: CorporateSigninComponent },
  { path:'corporate-register' , component: CorporateRegisterComponent },
  { path:'university-signin' , component: UniversitySigninComponent },
  { path:'university-register' , component: UniversityRegisterComponent },
  { path:'admin-signin' , component: AdminSigninComponent },  
  { path:'contactus' , component: ContactusComponent },
  { path:'forgot-password', component: ForgotPwComponent },
  { path:'admin-dashboard', component: AdminDashboardComponent },
  { path:'user_list', component: UserListComponent },
  { path:'college_list', component: CollegeListComponent },
  { path:'instructor_list', component: InstructorListComponent },
  { path:'organisation_list', component: OrganisationListComponent },
  { path:'list_course', component: ListCourseComponent }
];

