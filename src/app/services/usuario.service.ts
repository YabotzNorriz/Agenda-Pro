import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  urlAPI = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient) {
    console.log('usuario ativado');
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.urlAPI);
  }

  getUsuarioById(id: string | number): Observable<Usuario> {
    return this.http.get<Usuario>(this.urlAPI + '/' + id);
  }

  alterarUsuario(usuario: Usuario, novoUsuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      this.urlAPI + '/' + Number(usuario.id),
      novoUsuario
    );
  }

  verificarEmailExistente(email: string): Observable<boolean> {
    return this.getUsuarios().pipe(
      map((usuarios: Usuario[]) => {
        console.log('Lista de usuários:', usuarios);
        return usuarios.some((usuario) => usuario.email === email);
      })
    );
  }

  private generateRandomId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    usuario.id = String(this.generateRandomId());
    return this.http.post<Usuario>(this.urlAPI, usuario);
  }

  excluirUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.delete<Usuario>(this.urlAPI + '/' + Number(usuario.id));
  }

  login(email: string, senha: string): Observable<any> {
    return this.http.get<any[]>(`${this.urlAPI}?email=${email}&senha=${senha}`);
  }
}
