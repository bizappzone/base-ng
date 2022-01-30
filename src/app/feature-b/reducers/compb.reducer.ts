import { Action, createReducer, on } from '@ngrx/store';
import * as CompbActions from '../actions/compb.actions';

export const compbFeatureKey = 'compb';

export interface State {}

export const initialState: State = {
  loading: true,
  selectedID: '123',
};

export const reducer = createReducer(
  initialState,

  on(CompbActions.loadCompbs, (state) => state),
  on(CompbActions.loadCompbsSuccess, (state, action) => state),
  on(CompbActions.loadCompbsFailure, (state, action) => state)
);
