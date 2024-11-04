import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AtividadeComponent } from './atividade/atividade.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'atividade', component: AtividadeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
