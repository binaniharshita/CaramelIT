import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseProjectsTabComponent } from './user-course-projects-tab.component';

describe('UserCourseProjectsTabComponent', () => {
  let component: UserCourseProjectsTabComponent;
  let fixture: ComponentFixture<UserCourseProjectsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseProjectsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseProjectsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
