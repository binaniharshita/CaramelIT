import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatweworkComponent } from './whatwework.component';

describe('WhatweworkComponent', () => {
  let component: WhatweworkComponent;
  let fixture: ComponentFixture<WhatweworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatweworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatweworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
