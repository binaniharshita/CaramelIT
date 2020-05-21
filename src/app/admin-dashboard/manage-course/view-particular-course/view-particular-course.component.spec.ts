import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParticularCourseComponent } from './view-particular-course.component';

describe('ViewParticularCourseComponent', () => {
  let component: ViewParticularCourseComponent;
  let fixture: ComponentFixture<ViewParticularCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewParticularCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParticularCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
