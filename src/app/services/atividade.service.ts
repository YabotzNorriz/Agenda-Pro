import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from '../Atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  urlAPI = "http://localhost:3000/atividade";

  constructor(private http: HttpClient) {}

  getAtividade() : Observable<Atividade[]>{
    return this.http.get<Atividade[]>(this.urlAPI);
  }
}
