import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesOptionsComponent } from './courses-options.component';

describe('CoursesOptionsComponent', () => {
  let component: CoursesOptionsComponent;
  let fixture: ComponentFixture<CoursesOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
