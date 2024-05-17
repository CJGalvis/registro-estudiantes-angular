import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { SUBJECTS } from 'src/app/mock';
import { registerStudent } from 'src/app/store/actions/students.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  public registerForm = new FormGroup({
    dni: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
  });

  private subjectsListSelected: Array<any> = [];

  public subjectsList: Array<any> = [];

  public loading: boolean = false;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select('subjects').subscribe(({ subjects }) => {
      this.subjectsList = JSON.parse(JSON.stringify(subjects));
    });

    this.store.select('students').subscribe(({ loading }) => {
      this.loading = loading;
    });
  }

  /**
   * Get para habiliar botón cuando
   * se haya completado el formulario y
   * seleccionado las 3 materias
   */
  get disabledButton(): boolean {
    return this.registerForm.valid && this.subjectsListSelected.length == 3;
  }

  /**
   * Método para capturar el check de una materia
   * y almacenarla en una lista diferente a la general
   * @param item Materia seleccionada
   */
  getChangeCheck(item: any) {
    if (item.selected) {
      if (this.subjectsListSelected.length < 3) {
        this.subjectsListSelected.push(item.id);
      }
    } else {
      const index = this.subjectsListSelected.findIndex(
        (value) => value.id == item.id
      );
      this.subjectsListSelected.splice(index, 1);
    }

    this.mappingSubjects();
  }

  /**
   * Método para remapear las materias disponibles
   * según haya seleccionado para no repetir el mismo profesor
   */
  mappingSubjects() {
    if (this.subjectsListSelected.length == 3) {
      this.subjectsList.map((value) => {
        if (!value.selected) {
          value.disabled = true;
        }
      });
    } else {
      this.subjectsList.map((value) => {
        if (!value.selected) {
          value.disabled = false;
        }
      });
    }

    this.subjectsListSelected.forEach((element) => {
      this.subjectsList.map((value) => {
        if (value.teacher == element.teacher) {
          value.disabled = true;
          element.disabled = false;
        }
      });
    });
  }

  /**
   * Método para registrar un estudiante
   * a través de redux
   */
  registerStudent() {
    this.store.dispatch(
      registerStudent({
        student: {
          ...this.registerForm.value,
          SubjectIds: [...this.subjectsListSelected],
        },
      })
    );

    this.resetValues();
  }

  /**
   * Método para restaurar valores predeterminados
   */
  resetValues() {
    this.registerForm.reset();
    this.subjectsListSelected = [];
    this.subjectsList = [];
    this.router.navigate(['/list']);
  }
}
