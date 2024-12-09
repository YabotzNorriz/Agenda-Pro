import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../Usuario';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-usuario-edit',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './usuario-edit.component.html',
  styleUrl: './usuario-edit.component.css',
})
export class UsuarioEditComponent implements OnInit {
  alterarForm!: FormGroup;
  usuario!: Usuario;
  novoUsuario!: Usuario;
  idUsuario = LoginComponent.getUsuarioLogado();
  emailExistente!: boolean;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    if (this.idUsuario == undefined) {
      alert('Usuário não logado!');
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    const idUsuario = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID EM ATIVIDADE EDIT: ' + idUsuario);
    if (idUsuario) {
      this.usuarioService.getUsuarioById(idUsuario).subscribe((dado) => {
        this.usuario = dado;
        console.log(this.usuario);
      });
    } else {
      alert('ID DO USUÁRIO INVÁLIDO!');
    }

    this.alterarForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.alterarForm.valid) {
      console.log('Atividade Add é válido');
      this.novoUsuario = this.alterarForm.value;
      this.novoUsuario.id = this.usuario.id;
      const email = this.alterarForm.get('email')?.value;
      console.log(this.novoUsuario);
      this.usuarioService.verificarEmailExistente(email).subscribe((existe) => {
        this.emailExistente = existe;
        if (!this.emailExistente) {
          this.usuarioService
            .alterarUsuario(this.usuario, this.novoUsuario)
            .subscribe((dado) => {
              console.log(dado);
              alert('Usuário alterado com sucesso!');
            });
        } else {
          alert('Esse email já está em uso!');
        }
      });
    } else {
      alert('Email já existente no banco de dados!');
    }
  }
}
