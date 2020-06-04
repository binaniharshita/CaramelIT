import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SProgrepComponent } from './s-progrep.component';

describe('SProgrepComponent', () => {
  let component: SProgrepComponent;
  let fixture: ComponentFixture<SProgrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SProgrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SProgrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
