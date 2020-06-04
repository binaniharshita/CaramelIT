import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseInfoDropdownsComponent } from './user-course-info-dropdowns.component';

describe('CourseInfoDropdownsComponent', () => {
  let component: UserCourseInfoDropdownsComponent;
  let fixture: ComponentFixture<UserCourseInfoDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseInfoDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseInfoDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
