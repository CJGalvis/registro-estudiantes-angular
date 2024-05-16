import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/subjects.actions';
import { SUBJECTS } from 'src/app/mock';

export interface SubjectssState {
  subjects: Array<any>;
}
const subjectsInitialState: SubjectssState = {
  subjects: SUBJECTS,
};

const _subjectsReducer = createReducer(
  subjectsInitialState,
  on(actions.loadSubjects, (state) => ({
    ...state,
  }))
);

export function subjectsReducer(state: any, action: Action) {
  return _subjectsReducer(state, action);
}
