import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCompb from '../reducers/compb.reducer';

export const selectCompbState = createFeatureSelector<fromCompb.State>(
  fromCompb.compbFeatureKey
);
