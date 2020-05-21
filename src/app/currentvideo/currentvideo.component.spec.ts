import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentvideoComponent } from './currentvideo.component';

describe('CurrentvideoComponent', () => {
  let component: CurrentvideoComponent;
  let fixture: ComponentFixture<CurrentvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
