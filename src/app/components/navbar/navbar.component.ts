import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { loadStudent, loadStudents } from 'src/app/store/actions/students.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  constructor(private store: Store<AppState>) {}

  buscarUsuario(user: string) {
    if (!user) return;
    this.store.dispatch(loadStudent({ filter: user }));
    this.store.dispatch(loadStudents({ filter: user }));
  }
}
