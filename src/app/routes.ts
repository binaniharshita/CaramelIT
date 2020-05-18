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
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component'
import { AdminRegisterComponent } from './admin-register/admin-register.component';

import { HomepageComponent } from './homepage/homepage.component';

import { UserListComponent } from './user-list/user-list.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
// import { ListCourseComponent } from './list-course/list-course.component';
import { ListCourseComponent } from './admin-dashboard/manage-course/list-course/list-course.component';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuard } from './auth/auth.guard';
// import { ResponseResetComponent } from './response-reset/response-reset.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { RecommendationSystemComponent } from './recommendation-system/recommendation-system.component';
// import { ReportsComponent } from './reports/reports.component';

import { ManageCategoryComponent } from './admin-dashboard/manage-category/manage-category.component';
import { ManageSubcategoryComponent } from './admin-dashboard/manage-subcategory/manage-subcategory.component';
import { ListCategoryComponent } from './admin-dashboard/manage-category/list-category/list-category.component';
import { ListSubcategoryComponent } from './admin-dashboard/manage-subcategory/list-subcategory/list-subcategory.component';
import { CreateCategoryComponent } from './admin-dashboard/manage-category/create-category/create-category.component';
import { ManageCourseComponent } from './admin-dashboard/manage-course/manage-course.component';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { MaganeCatSubcatComponent } from './admin-dashboard/magane-cat-subcat/magane-cat-subcat.component'
import { ManageComponent } from './admin-dashboard1/sidebar/manage/manage.component';
import { CreateStructureComponent } from './admin-dashboard1/sidebar/manage/manage-structure/create-structure/create-structure.component';
import { ViewStructureComponent } from './admin-dashboard1/sidebar/manage/manage-structure/view-structure/view-structure.component';
import { AddCourseComponent } from './admin-dashboard1/sidebar/manage/manage-course/add-course/add-course.component';
import { ViewCourseComponent } from './admin-dashboard1/sidebar/manage/manage-course/view-course/view-course.component';
import { ReportsComponent } from './admin-dashboard1/sidebar/reports/reports.component';
import { ViewParticularCourseComponent} from './admin-dashboard/manage-course/view-particular-course/view-particular-course.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'student-signin', component: StudentSigninComponent },
  { path: 'student-register', component: StudentRegisterComponent },
  { path: 'instructor-signin', component: InstructorSigninComponent },
  { path: 'instructor-register', component: InstructorRegisterComponent },
  { path: 'corporate-signin', component: CorporateSigninComponent },
  { path: 'corporate-register', component: CorporateRegisterComponent },
  { path: 'university-signin', component: UniversitySigninComponent },
  { path: 'university-register', component: UniversityRegisterComponent },
  { path: 'admin-signin', component: AdminSigninComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'forgot-password', component: ForgotPwComponent, },
  // tslint:disable-next-line: max-line-length

  { path: 'user_list', component: UserListComponent },
  { path: 'college_list', component: CollegeListComponent },
  { path: 'instructor_list', component: InstructorListComponent },
  { path: 'organisation_list', component: OrganisationListComponent },
  { path: 'list_course', component: ListCourseComponent },
  { path: 'profile-page', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'student-signin', component: StudentSigninComponent },
  { path: 'student-register', component: StudentRegisterComponent },
  { path: 'instructor-signin', component: InstructorSigninComponent },
  { path: 'instructor-register', component: InstructorRegisterComponent },
  { path: 'corporate-signin', component: CorporateSigninComponent },
  { path: 'corporate-register', component: CorporateRegisterComponent },
  { path: 'university-signin', component: UniversitySigninComponent },
  { path: 'university-register', component: UniversityRegisterComponent },
  { path: 'admin-signin', component: AdminSigninComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'forgot-password', component: ForgotPwComponent },

  { path: 'user_list', component: UserListComponent },
  { path: 'college_list', component: CollegeListComponent },
  { path: 'instructor_list', component: InstructorListComponent },
  { path: 'organisation_list', component: OrganisationListComponent },
  { path: 'list_course', component: ListCourseComponent },
  { path: 'profile-page', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'response-reset-password/:token', component: ResponseResetComponent },
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'student-signin', component: StudentSigninComponent },
  { path: 'student-register', component: StudentRegisterComponent },
  { path: 'instructor-signin', component: InstructorSigninComponent },
  { path: 'instructor-register', component: InstructorRegisterComponent },
  { path: 'corporate-signin', component: CorporateSigninComponent },
  { path: 'corporate-register', component: CorporateRegisterComponent },
  { path: 'university-signin', component: UniversitySigninComponent },
  { path: 'university-register', component: UniversityRegisterComponent },
  { path: 'admin-signin', component: AdminSigninComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'forgot-password', component: ForgotPwComponent },

  { path: 'user_list', component: UserListComponent },
  { path: 'college_list', component: CollegeListComponent },
  { path: 'instructor_list', component: InstructorListComponent },
  { path: 'organisation_list', component: OrganisationListComponent },
  { path: 'list_course', component: ListCourseComponent },
  { path: 'profile-page', component: ProfilePageComponent, canActivate: [AuthGuard] },
  { path: 'response-reset-password/:token', component: ResponseResetComponent },
 // { path: 'reports', component: ReportsComponent },
  { path: 'question_bank', component: QuestionBankComponent },
  { path: 'recommendation_system', component: RecommendationSystemComponent },
  // { path: 'admin-dashboard/manage-category/list-category', component: ListCategoryComponent },
  // { path: 'admin-dashboard/manage-category/list-subcategory', component: ListSubcategoryComponent },
  // { path: 'admin-dashboard/manage-category', component: ManageCategoryComponent },
  // { path: 'admin-dashboard/manage-subcategory', component: ManageSubcategoryComponent },
  // { path: 'admin-dashboard/manage-course', component: ManageCourseComponent },
  // { path: 'admin-dashboard/manage-group/create-category', component: CreateCategoryComponent, outlet: 'sidebar' },
  // { path: 'admin-dashboard/manage-group', component: MaganeCatSubcatComponent },
  // { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboard1Component , children:[
    { path: 'manage', component: ManageComponent},
    { path: 'manage/add-structure', component: CreateStructureComponent },
    { path: 'manage/view-structure', component: ViewStructureComponent },
    { path: 'manage/add-course', component: AddCourseComponent },
    { path: 'manage/view-course', component: ViewCourseComponent,  },
    { path: 'reports', component: ReportsComponent},
    { path: 'manage/view-course/viewcourse/:id', component: ViewParticularCourseComponent}
  ]},
  // { path: 'admin-dashboard', component: AdminDashboardComponent },
];
