import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccPassComponent } from './acc-pass.component';

describe('AccPassComponent', () => {
  let component: AccPassComponent;
  let fixture: ComponentFixture<AccPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
