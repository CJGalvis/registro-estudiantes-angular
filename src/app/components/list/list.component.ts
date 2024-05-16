import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { StudentsState } from 'src/app/store/reducers/students.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  public listStudents: Array<any> = [];
  public loading: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('students').subscribe((state: StudentsState) => {
      this.listStudents = state.students;
      this.loading = state.loading;
    });
  }
}
