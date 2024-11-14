import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AtividadeItemComponent } from '../atividade/atividade-item/atividade-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AtividadeItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
