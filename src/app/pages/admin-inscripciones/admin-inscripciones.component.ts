import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgramaService } from '../../core/services/programa.service';

@Component({
  selector: 'app-admin-inscripciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-inscripciones.component.html',
  styleUrl: './admin-inscripciones.component.scss'
})
export class AdminInscripcionesComponent {
  private programaService = inject(ProgramaService);

  inscripciones: any[] = [];
  isLoading = true;
  errorMessage = '';
  successMessage = '';

  constructor() {
    this.loadInscripciones();
  }

  loadInscripciones(): void {
    this.programaService.getInscripcionesAdmin().subscribe({
      next: (response) => {
        this.inscripciones = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =
          error?.error?.message || 'No se pudieron cargar las inscripciones';
      }
    });
  }

  cambiarEstado(id: number, estado: 'pendiente' | 'aprobado' | 'rechazado'): void {
    this.errorMessage = '';
    this.successMessage = '';

    this.programaService.updateEstadoInscripcion(id, estado).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.loadInscripciones();
      },
      error: (error) => {
        this.errorMessage =
          error?.error?.message || 'No se pudo actualizar la inscripción';
      }
    });
  }
}
