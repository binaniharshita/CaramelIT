import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNotifyComponent } from './organization-notify.component';

describe('OrganizationNotifyComponent', () => {
  let component: OrganizationNotifyComponent;
  let fixture: ComponentFixture<OrganizationNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
