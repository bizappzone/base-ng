import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CompbActions from '../actions/compb.actions';



@Injectable()
export class CompbEffects {

  loadCompbs$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CompbActions.loadCompbs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CompbActions.loadCompbsSuccess({ data })),
          catchError(error => of(CompbActions.loadCompbsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
