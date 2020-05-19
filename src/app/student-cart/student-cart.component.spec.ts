import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCartComponent } from './student-cart.component';

describe('StudentCartComponent', () => {
  let component: StudentCartComponent;
  let fixture: ComponentFixture<StudentCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
