import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSigninComponent } from './corporate-signin.component';

describe('CorporateSigninComponent', () => {
  let component: CorporateSigninComponent;
  let fixture: ComponentFixture<CorporateSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
