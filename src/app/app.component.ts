import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { loadSubjects } from './store/actions/subjects.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'register-students';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadSubjects());
  }
}
