import { Component, input, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AtividadeService } from '../../services/atividade.service';
import { LoginComponent } from '../../login/login.component';
import { Atividade } from '../../Atividade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atividade-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atividade-item.component.html',
  styleUrl: './atividade-item.component.css',
})
export class AtividadeItemComponent implements OnInit {
  atividades!: Atividade[];
  descricao: string = 'Descrição';
  titulo: string = 'Título';
  dataHoje!: Date;
  dataEntrega!: Date;
  pontos: number = 0;
  idUsuario: number = LoginComponent.getUsuarioLogado();
  @Input() atividade!: Atividade;
  idAtividade!: number;
  public static idAtividade: number;

  constructor(
    private router: Router,
    private atividadeService: AtividadeService
  ) {
    console.log('ID USUÁRIO: ' + this.idUsuario);
  }
  ngOnInit(): void {
    this.atividadeService
      .getAtividadePorIdUsuario(this.idUsuario)
      .subscribe((atividades) => {
        this.atividades = atividades;
      });
  }

  abrirEditor(idAtividade: string) {
    console.log('ID ATIVIDADE EM ATIVIDADE-ITEM ' + idAtividade);
    this.router.navigate(['/atividade-edit', idAtividade]);
  }

  public static setIdAtividade(idAtividade: number) {
    this.idAtividade = idAtividade;
  }

  public static getIdAtividade(): number {
    return this.idAtividade;
  }
}
