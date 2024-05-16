import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/students.actions';

export interface StudentsState {
  students: Array<any>;
  studentSelected: any;
  loading: boolean;
  error: any;
  filter: string | null;
}
const studentsInitialState: StudentsState = {
  students: [],
  studentSelected: null,
  loading: false,
  error: null,
  filter: null,
};

const _studentsReducer = createReducer(
  studentsInitialState,
  on(actions.registerStudent, (state, { student }) => ({
    ...state,
    loading: true,
    studentSelected: student,
  })),
  on(actions.registerStudentSuccess, (state, { student }) => ({
    ...state,
    loading: false,
  })),
  on(actions.registerStudentError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(actions.loadStudents, (state, { filter }) => ({
    ...state,
    loading: true,
    filter,
  })),
  on(actions.loadStudentsSuccess, (state, { students }) => ({
    ...state,
    loading: false,
    students,
  })),
  on(actions.loadStudentserror, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function studentsReducer(state: any, action: Action) {
  return _studentsReducer(state, action);
}
