import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA1Component } from './comp-a1.component';

describe('CompA1Component', () => {
  let component: CompA1Component;
  let fixture: ComponentFixture<CompA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompA1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
