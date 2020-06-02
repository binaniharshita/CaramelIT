import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfContentsTabComponent } from './table-of-contents-tab.component';

describe('TableOfContentsTabComponent', () => {
  let component: TableOfContentsTabComponent;
  let fixture: ComponentFixture<TableOfContentsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfContentsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfContentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
