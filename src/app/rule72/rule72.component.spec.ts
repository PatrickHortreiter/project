import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rule72Component } from './rule72.component';

describe('Rule72Component', () => {
  let component: Rule72Component;
  let fixture: ComponentFixture<Rule72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rule72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rule72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
