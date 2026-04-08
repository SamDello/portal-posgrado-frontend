import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  nombres = '';
  apellidos = '';
  email = '';
  password = '';
  ci = '';
  telefono = '';
  fecha_nacimiento = '';
  profesion = '';

  errorMessage = '';
  successMessage = '';
  isLoading = false;

  register(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.nombres || !this.apellidos || !this.email || !this.password || !this.ci) {
      this.errorMessage = 'Completa los campos obligatorios';
      return;
    }

    this.isLoading = true;

    this.authService.register({
      nombres: this.nombres,
      apellidos: this.apellidos,
      email: this.email,
      password: this.password,
      ci: this.ci,
      telefono: this.telefono,
      fecha_nacimiento: this.fecha_nacimiento,
      profesion: this.profesion
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Registro exitoso. Ahora puedes iniciar sesión.';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1200);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error?.error?.message || 'No se pudo registrar el usuario';
      }
    });
  }
}
