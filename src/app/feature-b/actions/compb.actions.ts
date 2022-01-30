import { createAction, props } from '@ngrx/store';

export const loadCompbs = createAction(
  '[Compb] Load Compbs'
);

export const loadCompbsSuccess = createAction(
  '[Compb] Load Compbs Success',
  props<{ data: any }>()
);

export const loadCompbsFailure = createAction(
  '[Compb] Load Compbs Failure',
  props<{ error: any }>()
);
