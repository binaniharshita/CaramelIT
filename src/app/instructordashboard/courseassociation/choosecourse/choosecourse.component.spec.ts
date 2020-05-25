import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosecourseComponent } from './choosecourse.component';

describe('ChoosecourseComponent', () => {
  let component: ChoosecourseComponent;
  let fixture: ComponentFixture<ChoosecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
