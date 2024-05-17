import { createAction, props } from '@ngrx/store';

export const registerStudent = createAction(
  '[Student]  registerStudent',
  props<{ student: any }>()
);

export const registerStudentSuccess = createAction(
  '[Student]  registerStudentSuccess',
  props<{ student: any }>()
);

export const registerStudentError = createAction(
  '[Student]  registerStudentSuccess',
  props<{ error: any }>()
);

export const loadStudent = createAction(
  '[Student]  loadStudent',
  props<{ filter: string }>()
);

export const loadStudentSuccess = createAction(
  '[Student]  loadStudentSuccess',
  props<{ data: string }>()
);

export const loadStudents = createAction(
  '[Student]  loadStudents',
  props<{ filter: string }>()
);

export const loadStudentsSuccess = createAction(
  '[Student]  loadStudentsSuccess',
  props<{ students: Array<any> }>()
);

export const loadStudentserror = createAction(
  '[Student]  loadStudentsSerror',
  props<{ error: any }>()
);
