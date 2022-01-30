import * as fromCompb from './compb.actions';

describe('loadCompbs', () => {
  it('should return an action', () => {
    expect(fromCompb.loadCompbs().type).toBe('[Compb] Load Compbs');
  });
});
