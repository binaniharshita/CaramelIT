import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateRegisterComponent } from './corporate-register.component';

describe('CorporateRegisterComponent', () => {
  let component: CorporateRegisterComponent;
  let fixture: ComponentFixture<CorporateRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
