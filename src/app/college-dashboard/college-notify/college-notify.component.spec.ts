import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeNotifyComponent } from './college-notify.component';

describe('CollegeNotifyComponent', () => {
  let component: CollegeNotifyComponent;
  let fixture: ComponentFixture<CollegeNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
