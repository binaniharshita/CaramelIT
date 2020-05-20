import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademypageComponent } from './academypage.component';

describe('AcademypageComponent', () => {
  let component: AcademypageComponent;
  let fixture: ComponentFixture<AcademypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
