import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableOfContentsTabComponent } from './user-table-of-contents-tab.component';

describe('UserTableOfContentsTabComponent', () => {
  let component: UserTableOfContentsTabComponent;
  let fixture: ComponentFixture<UserTableOfContentsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableOfContentsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableOfContentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
