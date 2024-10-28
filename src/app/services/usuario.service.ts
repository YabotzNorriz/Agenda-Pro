import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlAPI = "http://localhost:3000/usuario";

  constructor(private http: HttpClient) {}

  getUsuario() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlAPI);
  }
}
