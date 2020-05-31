import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactus1Component } from './contactus1.component';

describe('Contactus1Component', () => {
  let component: Contactus1Component;
  let fixture: ComponentFixture<Contactus1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contactus1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contactus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
