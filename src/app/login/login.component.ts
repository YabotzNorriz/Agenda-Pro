import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private usuarioService: UsuarioService,private router: Router) {
    // this.loginForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log("LoginForm é válido");
      const { email, password } = this.loginForm.value;
      this.usuarioService.login(email, password).subscribe(users => {
        if (users.length > 0) {
          console.log("Login realizado");
          this.router.navigate(['/home']);
        } else {
          console.log("Credenciais inválidas");
        } 
      });
    } else {
      return;
    }
  }
}
