import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from '../Atividade';
import { LoginComponent } from '../login/login.component';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root',
})
export class AtividadeService {
  urlAPI = 'http://localhost:3000/atividade';
  constructor(private http: HttpClient) {}

  getAtividade(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.urlAPI);
  }

  private generateRandomId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  cadastrarAtividade(atividade: Atividade): Observable<Atividade> {
    atividade.idAtividade = this.generateRandomId();
    atividade.idUsuario = LoginComponent.getUsuarioLogado();
    console.log('ID DO USUÁRIO: ' + atividade.idUsuario);
    return this.http.post<Atividade>(this.urlAPI, atividade);
  }
}
