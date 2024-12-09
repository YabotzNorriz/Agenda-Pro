import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AtividadeService } from '../../services/atividade.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-atividade-add',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './atividade-add.component.html',
  styleUrl: './atividade-add.component.css',
})
export class AtividadeAddComponent implements OnInit {
  atividadeAddForm!: FormGroup;
  descricao: string = 'Descrição';
  titulo: string = 'Título';
  curso: string = 'Curso';
  materia: string = 'Matéria';
  dataHoje!: Date;
  dataEntrega!: Date;
  pontos: number = 0;
  idUsuario = LoginComponent.getUsuarioLogado();

  constructor(
    private router: Router,
    private atividadeService: AtividadeService
  ) {
    if (this.idUsuario == undefined) {
      alert('Usuário não logado!');
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.atividadeAddForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
      materia: new FormControl('', [Validators.required]),
      dataHoje: new FormControl('', [Validators.required]),
      dataEntrega: new FormControl('', [Validators.required]),
      pontos: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.atividadeAddForm.valid) {
      console.log('Atividade Add é válido');
      const novaAtividade = this.atividadeAddForm.value;
      console.log(
        this.atividadeAddForm + '\nUsuario:' + LoginComponent.getUsuarioLogado()
      );
      this.atividadeService
        .cadastrarAtividade(novaAtividade)
        .subscribe((atividade) => {
          console.log(atividade);
        });
      this.router.navigate(['/home']);
    } else {
      console.log('SUS' + this.atividadeAddForm);
    }
  }
}
