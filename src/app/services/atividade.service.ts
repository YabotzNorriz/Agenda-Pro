import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividade } from '../Atividade';
import { LoginComponent } from '../login/login.component';

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
    atividade.id = String(this.generateRandomId());
    atividade.idUsuario = LoginComponent.getUsuarioLogado();
    console.log('ID DO USUÁRIO: ' + atividade.idUsuario);
    return this.http.post<Atividade>(this.urlAPI, atividade);
  }

  getAtividadePorIdUsuario(
    idUsuario: string | number
  ): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(`${this.urlAPI}?idUsuario=${idUsuario}`);
  }

  getAtividadePorIdAtividade(
    idAtividade: string | number
  ): Observable<Atividade> {
    return this.http.get<Atividade>(this.urlAPI + '/' + idAtividade);
  }

  excluirAtividade(atividade: Atividade): Observable<Atividade> {
    return this.http.delete<Atividade>(
      this.urlAPI + '/' + Number(atividade.id)
    );
  }

  alterarAtividade(
    atividade: Atividade,
    novaAtividade: Atividade
  ): Observable<Atividade> {
    return this.http.put<Atividade>(
      this.urlAPI + '/' + Number(atividade.id),
      novaAtividade
    );
  }
}
