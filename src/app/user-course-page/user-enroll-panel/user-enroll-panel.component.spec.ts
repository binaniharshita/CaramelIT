import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnrollPanelComponent } from './user-enroll-panel.component';

describe('EnrollPanelComponent', () => {
  let component: UserEnrollPanelComponent;
  let fixture: ComponentFixture<UserEnrollPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEnrollPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnrollPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
