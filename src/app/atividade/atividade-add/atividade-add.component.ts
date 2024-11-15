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

@Component({
  selector: 'app-atividade-add',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './atividade-add.component.html',
  styleUrl: './atividade-add.component.css',
})
export class AtividadeAddComponent implements OnInit {
  atividadeAddForm!: FormGroup;

  constructor(
    private router: Router,
    private atividadeService: AtividadeService
  ) {}

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
      this.atividadeService
        .cadastrarAtividade(novaAtividade)
        .subscribe((atividade) => {
          console.log(atividade);
        });
    }
  }
}
