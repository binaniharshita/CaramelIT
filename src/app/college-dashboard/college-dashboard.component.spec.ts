import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeDashboardComponent } from './college-dashboard.component';

describe('CollegeDashboardComponent', () => {
  let component: CollegeDashboardComponent;
  let fixture: ComponentFixture<CollegeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
