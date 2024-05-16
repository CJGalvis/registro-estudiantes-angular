import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as subjectsActions from '../actions/subjects.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { ApiSubjectsService } from 'src/app/services/api-subjects.service';

@Injectable()
export class SubjectsEffects {
  constructor(
    private actions$: Actions,
    private subjectsServices: ApiSubjectsService
  ) {}

  getSubjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(subjectsActions.loadSubjects),
      mergeMap(() =>
        this.subjectsServices.getSubjects().pipe(
          map((data: any) =>
            subjectsActions.loadSubjectsSuccess({ subjects: data })
          ),
          catchError((errService) =>
            of(subjectsActions.loadSubjectsError({ error: errService }))
          )
        )
      )
    )
  );
}
