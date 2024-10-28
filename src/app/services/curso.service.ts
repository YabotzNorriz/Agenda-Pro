import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  urlAPI = "http://localhost:3000/curso";

  constructor(private http: HttpClient) {}

  getCurso() : Observable<Curso[]>{
    return this.http.get<Curso[]>(this.urlAPI);
  }
}
