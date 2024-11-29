import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeService } from '../../services/atividade.service';
import { LoginComponent } from '../../login/login.component';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { Atividade } from '../../Atividade';

@Component({
  selector: 'app-atividade-edit',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './atividade-edit.component.html',
  styleUrl: './atividade-edit.component.css',
})
export class AtividadeEditComponent implements OnInit {
  atividadeEditForm!: FormGroup;
  descricao!: string;
  titulo!: string;
  curso!: string;
  materia!: string;
  dataHoje!: Date;
  dataEntrega!: Date;
  pontos!: number;
  atividade!: Atividade;
  novaAtividade!: Atividade;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private atividadeService: AtividadeService
  ) {}

  ngOnInit(): void {
    const idAtividade = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID EM ATIVIDADE EDIT: ' + idAtividade);
    if (idAtividade) {
      this.atividadeService
        .getAtividadePorIdAtividade(idAtividade)
        .subscribe((dado) => {
          this.atividade = dado;
          console.log(this.atividade);
        });
    } else {
      console.log('ID INVÁLIDO!');
    }

    this.atividadeEditForm = new FormGroup({
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
    if (this.atividadeEditForm.valid) {
      console.log('Atividade Add é válido');
      this.novaAtividade = this.atividadeEditForm.value;
      this.novaAtividade.id = this.atividade.id;
      this.novaAtividade.idUsuario = this.atividade.idUsuario;

      console.log(this.novaAtividade);
      this.atividadeService
        .alterarAtividade(this.atividade, this.novaAtividade)
        .subscribe((atividade) => {
          console.log('Atividade alterada com sucesso' + atividade);
        });
      this.router.navigate(['/home']);
    } else {
      console.log(this.atividadeEditForm);
    }
  }

  excluirAtividade() {
    this.atividadeService.excluirAtividade(this.atividade).subscribe();
    this.router.navigate(['home']);
  }
}
