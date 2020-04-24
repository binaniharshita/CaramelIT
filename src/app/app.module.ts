import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

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

const routes: Routes = [
  { path:'', pathMatch:'full' , component: NavbarComponent },
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
  { path:'forgot-password', component: ForgotPwComponent }
]

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
