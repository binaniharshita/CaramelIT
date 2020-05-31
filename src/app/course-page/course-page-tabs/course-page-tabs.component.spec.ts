import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageTabsComponent } from './course-page-tabs.component';

describe('CoursePageTabsComponent', () => {
  let component: CoursePageTabsComponent;
  let fixture: ComponentFixture<CoursePageTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
