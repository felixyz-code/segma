import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
[x: string]: any;
  login: String = 'Inicia Sesión';
  username: String = 'Usuario';
  password: String = 'Contraseña';
  keepSession: String = 'Mantener sesión iniciada';
  forgotPassword: String = '¿Olvidaste tu contraseña?';
  loginNOw: String = 'Entrar';
}
