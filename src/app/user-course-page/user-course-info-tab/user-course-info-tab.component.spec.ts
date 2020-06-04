import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseInfoTabComponent } from './user-course-info-tab.component';

describe('CourseInfoTabComponent', () => {
  let component: UserCourseInfoTabComponent;
  let fixture: ComponentFixture<UserCourseInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
