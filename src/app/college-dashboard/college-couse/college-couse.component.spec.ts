import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeCouseComponent } from './college-couse.component';

describe('CollegeCouseComponent', () => {
  let component: CollegeCouseComponent;
  let fixture: ComponentFixture<CollegeCouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeCouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeCouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
