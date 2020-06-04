import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursePageComponent } from './user-course-page.component';

describe('CoursePageComponent', () => {
  let component: UserCoursePageComponent;
  let fixture: ComponentFixture<UserCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoursePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
