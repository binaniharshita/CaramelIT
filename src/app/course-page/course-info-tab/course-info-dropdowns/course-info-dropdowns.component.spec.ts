import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoDropdownsComponent } from './course-info-dropdowns.component';

describe('CourseInfoDropdownsComponent', () => {
  let component: CourseInfoDropdownsComponent;
  let fixture: ComponentFixture<CourseInfoDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInfoDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInfoDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
