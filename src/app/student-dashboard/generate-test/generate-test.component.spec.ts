import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTestComponent } from './generate-test.component';

describe('GenerateTestComponent', () => {
  let component: GenerateTestComponent;
  let fixture: ComponentFixture<GenerateTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
