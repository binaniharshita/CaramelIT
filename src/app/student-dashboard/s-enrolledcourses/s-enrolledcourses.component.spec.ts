import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SEnrolledcoursesComponent } from './s-enrolledcourses.component';

describe('SEnrolledcoursesComponent', () => {
  let component: SEnrolledcoursesComponent;
  let fixture: ComponentFixture<SEnrolledcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SEnrolledcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SEnrolledcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
