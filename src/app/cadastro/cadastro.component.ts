import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent implements OnInit {
  usuario!: Usuario;
  cadastroForm!: FormGroup;
  emailExistente!: boolean;

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const novoUsuario = this.cadastroForm.value;
      const email = this.cadastroForm.get('email')?.value;
      this.usuarioService.verificarEmailExistente(email).subscribe((existe) => {
        this.emailExistente = existe;
        console.log('Alterado em cima ' + this.emailExistente);

        if (!this.emailExistente) {
          console.log('Alterado em baixo ' + this.emailExistente);
          this.usuarioService.cadastrarUsuario(novoUsuario).subscribe(() => {
            alert('Cadastro realizado com sucesso!');
            this.router.navigate(['login']);
          });
        } else {
          alert('Email já cadastrado!');
        }
      });
    }
  }
}
