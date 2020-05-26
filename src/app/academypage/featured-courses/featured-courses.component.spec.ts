import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCoursesComponent } from './featured-courses.component';

describe('FeaturedCoursesComponent', () => {
  let component: FeaturedCoursesComponent;
  let fixture: ComponentFixture<FeaturedCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
