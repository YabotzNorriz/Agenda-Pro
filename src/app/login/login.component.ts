import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  public static idUsuarioLogado: number;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    // this.loginForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('LoginForm é válido');
      const { email, password } = this.loginForm.value;
      this.usuarioService.login(email, password).subscribe((users) => {
        if (users.length == 1) {
          console.log(users);
          LoginComponent.idUsuarioLogado = users[0].id;
          console.log('Usuário logado: ', users[0].id);
          this.router.navigate(['/home']);
        } else {
          alert('Senha e/ou e-mail incorretos!');
        }
      });
    } else {
      alert('Login inválido!');
    }
  }

  abrirCadastro() {
    this.router.navigate(['/cadastro']);
  }

  public static getUsuarioLogado(): number {
    return this.idUsuarioLogado;
  }
}
