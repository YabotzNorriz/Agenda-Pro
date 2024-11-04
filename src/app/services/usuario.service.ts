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

  // getUsuario() : Observable<Usuario[]>{
  //   return this.http.get<Usuario[]>(this.urlAPI);
  // }

  login(login: string, senha: string): Observable<any> { 
    return this.http.get<any[]>(`${this.urlAPI}?login=${login}&senha=${senha}`);
  }
}
