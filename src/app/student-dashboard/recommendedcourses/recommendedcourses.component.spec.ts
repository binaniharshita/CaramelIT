import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedcoursesComponent } from './recommendedcourses.component';

describe('RecommendedcoursesComponent', () => {
  let component: RecommendedcoursesComponent;
  let fixture: ComponentFixture<RecommendedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
