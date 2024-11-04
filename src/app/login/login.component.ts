import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private usuarioService: UsuarioService,private router: Router) {
  }

  onSubmit() {
    console.log("email" + this.email + "\nsenha:" + this.senha);
    this.usuarioService.login(this.email, this.senha).subscribe((dados) => {
      
      if(dados.length > 0) {
        this.router.navigate(['/atividade']);
      } else {
        alert("Login ou senha incorretos");
      }
    });
  }
}
