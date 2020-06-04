import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollPanelComponent } from './enroll-panel.component';

describe('EnrollPanelComponent', () => {
  let component: EnrollPanelComponent;
  let fixture: ComponentFixture<EnrollPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
