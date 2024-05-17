import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as studentsActions from '../actions/students.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { ApiStudentsService } from 'src/app/services/api-students.service';

@Injectable()
export class StudentsEffects {
  constructor(
    private actions$: Actions,
    private studentsServices: ApiStudentsService
  ) {}

  registerStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentsActions.registerStudent),
      mergeMap((action) =>
        this.studentsServices.registerStudent(action.student).pipe(
          map((student: any) =>
            studentsActions.registerStudentSuccess({ student })
          ),
          catchError((errService) =>
            of(studentsActions.registerStudentError({ error: errService }))
          )
        )
      )
    )
  );

  getStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentsActions.loadStudents),
      mergeMap((action) =>
        this.studentsServices.getSubjectsByStudent(action.filter).pipe(
          map((data: any) =>
            studentsActions.loadStudentsSuccess({ students: data })
          ),
          catchError((errService) =>
            of(studentsActions.loadStudentserror({ error: errService }))
          )
        )
      )
    )
  );

  getSubject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(studentsActions.loadStudent),
      mergeMap((action) =>
        this.studentsServices.getSubjectsByDNI(action.filter).pipe(
          map((data: any) =>
            studentsActions.loadStudentSuccess({ data })
          ),
          catchError((errService) =>
            of(studentsActions.loadStudentserror({ error: errService }))
          )
        )
      )
    )
  );
}
