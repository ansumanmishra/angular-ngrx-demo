import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUsersComponent } from './dynamic-users.component';

describe('DynamicUsersComponent', () => {
  let component: DynamicUsersComponent;
  let fixture: ComponentFixture<DynamicUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
