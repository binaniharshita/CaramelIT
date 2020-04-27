import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCoursesComponent } from './other-courses.component';

describe('OtherCoursesComponent', () => {
  let component: OtherCoursesComponent;
  let fixture: ComponentFixture<OtherCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
