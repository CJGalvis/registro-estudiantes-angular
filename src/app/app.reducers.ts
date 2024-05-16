import { ActionReducerMap } from '@ngrx/store';
import {
  StudentsState,
  studentsReducer,
} from './store/reducers/students.reducer';
import {
  SubjectssState,
  subjectsReducer,
} from './store/reducers/subjects.reducer';

export interface AppState {
  students: StudentsState;
  subjects: SubjectssState;
}

export const appReducers: ActionReducerMap<AppState> = {
  students: studentsReducer,
  subjects: subjectsReducer,
};
