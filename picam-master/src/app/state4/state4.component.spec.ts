import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { State4Component } from './state4.component';

describe('State4Component', () => {
  let component: State4Component;
  let fixture: ComponentFixture<State4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ State4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(State4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
