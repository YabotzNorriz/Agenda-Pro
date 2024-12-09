import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AtividadeItemComponent } from '../atividade/atividade-item/atividade-item.component';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { Atividade } from '../Atividade';
import { AtividadeService } from '../services/atividade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AtividadeItemComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  idUsuario: number = LoginComponent.getUsuarioLogado();
  atividades: Atividade[] = [];

  constructor(
    private atividadeService: AtividadeService,
    private router: Router
  ) {
    console.log('ID USUARIO HOME: ' + this.idUsuario);
    if (this.idUsuario == undefined) {
      alert('Usuário não logado!');
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.atividadeService
      .getAtividadePorIdUsuario(this.idUsuario)
      .subscribe((atividade) => {
        this.atividades = atividade;
        console.log(this.atividades);
      });
  }
}
