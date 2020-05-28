import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentDisplayComponent } from './course-content-display.component';

describe('CourseContentDisplayComponent', () => {
  let component: CourseContentDisplayComponent;
  let fixture: ComponentFixture<CourseContentDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseContentDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
