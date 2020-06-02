import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoTabComponent } from './course-info-tab.component';

describe('CourseInfoTabComponent', () => {
  let component: CourseInfoTabComponent;
  let fixture: ComponentFixture<CourseInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
