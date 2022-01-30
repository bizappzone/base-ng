import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CompbEffects } from './compb.effects';

describe('CompbEffects', () => {
  let actions$: Observable<any>;
  let effects: CompbEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CompbEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CompbEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
