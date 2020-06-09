import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDashComponent } from './organization-dash.component';

describe('OrganizationDashComponent', () => {
  let component: OrganizationDashComponent;
  let fixture: ComponentFixture<OrganizationDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
