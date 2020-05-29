import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProjectsTabComponent } from './course-projects-tab.component';

describe('CourseProjectsTabComponent', () => {
  let component: CourseProjectsTabComponent;
  let fixture: ComponentFixture<CourseProjectsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseProjectsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProjectsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
