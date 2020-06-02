import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCourseComponent } from './organization-course.component';

describe('OrganizationCourseComponent', () => {
  let component: OrganizationCourseComponent;
  let fixture: ComponentFixture<OrganizationCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
