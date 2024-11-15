import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-atividade-item',
  standalone: true,
  imports: [],
  templateUrl: './atividade-item.component.html',
  styleUrl: './atividade-item.component.css',
})
export class AtividadeItemComponent {
  constructor(private router: Router) {}
  abrirEditor() {
    this.router.navigate(['/atividade-add']);
  }
}
