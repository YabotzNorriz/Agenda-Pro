import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AtividadeAddComponent } from './atividade/atividade-add/atividade-add.component';
import { AtividadeEditComponent } from './atividade/atividade-edit/atividade-edit.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'atividade-add', component: AtividadeAddComponent },
  { path: 'atividade-edit/:id', component: AtividadeEditComponent },
  { path: 'usuario-edit/:id', component: UsuarioEditComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
