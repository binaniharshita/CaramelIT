import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSwdComponent } from './program-swd.component';

describe('ProgramSwdComponent', () => {
  let component: ProgramSwdComponent;
  let fixture: ComponentFixture<ProgramSwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramSwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
