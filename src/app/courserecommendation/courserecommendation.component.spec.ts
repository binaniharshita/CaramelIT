import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourserecommendationComponent } from './courserecommendation.component';

describe('CourserecommendationComponent', () => {
  let component: CourserecommendationComponent;
  let fixture: ComponentFixture<CourserecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourserecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourserecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
