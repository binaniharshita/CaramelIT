import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseContentDisplayComponent } from './user-course-content-display.component';

describe('UserCourseContentDisplayComponent', () => {
  let component: UserCourseContentDisplayComponent;
  let fixture: ComponentFixture<UserCourseContentDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseContentDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseContentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
