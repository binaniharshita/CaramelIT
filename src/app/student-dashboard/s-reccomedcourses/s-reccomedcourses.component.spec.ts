import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SReccomedcoursesComponent } from './s-reccomedcourses.component';

describe('SReccomedcoursesComponent', () => {
  let component: SReccomedcoursesComponent;
  let fixture: ComponentFixture<SReccomedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SReccomedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SReccomedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
