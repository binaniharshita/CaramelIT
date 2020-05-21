import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySigninComponent } from './university-signin.component';

describe('UniversitySigninComponent', () => {
  let component: UniversitySigninComponent;
  let fixture: ComponentFixture<UniversitySigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitySigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitySigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
