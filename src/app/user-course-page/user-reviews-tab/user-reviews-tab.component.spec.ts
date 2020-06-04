import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewsTabComponent } from './user-reviews-tab.component';

describe('ReviewsTabComponent', () => {
  let component: UserReviewsTabComponent;
  let fixture: ComponentFixture<UserReviewsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReviewsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
