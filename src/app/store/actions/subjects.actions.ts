import { createAction, props } from '@ngrx/store';

export const loadSubjects = createAction('[Subjects]  loadSubjects');

export const loadSubjectsSuccess = createAction('[Subjects]  loadSubjectsSuccess',
    props<{ subjects: Array<any> }>()
);

export const loadSubjectsError = createAction('[Subjects]  loadSubjectsError',
    props<{ error: any }>()
);
