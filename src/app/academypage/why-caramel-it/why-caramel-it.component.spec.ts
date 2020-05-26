import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCaramelItComponent } from './why-caramel-it.component';

describe('WhyCaramelItComponent', () => {
  let component: WhyCaramelItComponent;
  let fixture: ComponentFixture<WhyCaramelItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyCaramelItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCaramelItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
