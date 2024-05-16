import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSubjectsService {

  private base_url = 'https://localhost:7128/api';

  constructor(private http: HttpClient) {}

  getSubjects() {
    const url = `${this.base_url}/Subjects`;
    return this.http.get(url);
  }
}
