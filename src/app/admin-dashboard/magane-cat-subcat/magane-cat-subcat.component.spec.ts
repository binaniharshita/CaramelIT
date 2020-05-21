import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaganeCatSubcatComponent } from './magane-cat-subcat.component';

describe('MaganeCatSubcatComponent', () => {
  let component: MaganeCatSubcatComponent;
  let fixture: ComponentFixture<MaganeCatSubcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaganeCatSubcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaganeCatSubcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
