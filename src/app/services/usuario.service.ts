import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlAPI = "http://localhost:3000/usuario";

  constructor(private http: HttpClient) {
    console.log("usuario ativado");
  }

  getUsuarios() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlAPI);
  }

  getUsuarioById(id: string | number): Observable<Usuario> {
    return this.http.get<Usuario>(this.urlAPI + "/" + id);
  }

  alterarCliente(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.urlAPI + "/" + usuario.id, usuario);
  }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlAPI, usuario);
  }

  excluirUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>( this.urlAPI + "/" + usuario.id );
  }

  login(login: string, senha: string): Observable<any> {
    return this.http.get<any[]>(`${this.urlAPI}?login=${login}&senha=${senha}`);
  }
}
