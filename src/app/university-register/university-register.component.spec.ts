import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityRegisterComponent } from './university-register.component';

describe('UniversityRegisterComponent', () => {
  let component: UniversityRegisterComponent;
  let fixture: ComponentFixture<UniversityRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
