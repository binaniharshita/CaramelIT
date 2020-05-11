import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAreaComponent } from './widget-area.component';

describe('WidgetAreaComponent', () => {
  let component: WidgetAreaComponent;
  let fixture: ComponentFixture<WidgetAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
