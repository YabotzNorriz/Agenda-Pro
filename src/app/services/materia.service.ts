import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materia } from '../Materia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  urlAPI = "http://localhost:3000/materia";

  constructor(private http: HttpClient) {}

  getAtividade() : Observable<Materia[]>{
    return this.http.get<Materia[]>(this.urlAPI);
  }
}
