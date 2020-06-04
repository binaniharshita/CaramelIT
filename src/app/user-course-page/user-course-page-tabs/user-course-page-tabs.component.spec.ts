import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoursePageTabsComponent } from './user-course-page-tabs.component';

describe('CoursePageTabsComponent', () => {
  let component: UserCoursePageTabsComponent;
  let fixture: ComponentFixture<UserCoursePageTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoursePageTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoursePageTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
