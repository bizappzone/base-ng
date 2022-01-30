import * as fromCompb from '../reducers/compb.reducer';
import { selectCompbState } from './compb.selectors';

describe('Compb Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCompbState({
      [fromCompb.compbFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
