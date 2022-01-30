import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA2Component } from './comp-a2.component';

describe('CompA2Component', () => {
  let component: CompA2Component;
  let fixture: ComponentFixture<CompA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompA2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
