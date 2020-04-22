import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSigninComponent } from './instructor-signin.component';

describe('InstructorSigninComponent', () => {
  let component: InstructorSigninComponent;
  let fixture: ComponentFixture<InstructorSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
