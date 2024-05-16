import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiStudentsService {
  private base_url = 'https://localhost:7128/api';

  constructor(private http: HttpClient) {}

  registerStudent(payload: any) {
    const url = `${this.base_url}/students`;
    return this.http.post(url, payload).pipe(map((res: any) => res.data));
  }

  getSubjectsByStudent(dni: string) {
    const url = `${this.base_url}/students/${dni}`;
    return this.http.get(url).pipe(map((res: any) => res.data));
  }
}
